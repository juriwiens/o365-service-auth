import { test } from 'ava'
import * as core from '../src/core'
import { privateKey, certificate } from './keys'
import * as nock from 'nock'

/** A valid Access Token example */
const expectedAccessToken: core.AccessToken = {
  token_type: 'Bearer',
  expires_in: '3600',
  scope: 'Contacts.Read',
  expires_on: '1444162887',
  not_before: '1444158987',
  resource: 'https://outlook.office365.com',
  access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzMzM2VhNjk4LTdiMjItNDNiNC1iNGNkLTliNTlhZjQxMDk2ZS8iLCJpYXQiOjE0NDQxNTg5ODcsIm5iZiI6MTQ0NDE1ODk4NywiZXhwIjoxNDQ0MTYyODg3LCJ2ZXIiOiIxLjAiLCJ0aWQiOiIzMzNlYTY5OC03YjIyLTQzYjQtYjRjZC05YjU5YWY0MTA5NmUiLCJyb2xlcyI6WyJDb250YWN0cy5SZWFkIl0sIm9pZCI6IjJjNDhhNzIzLWQ1YTgtNDRlNS1iZDRlLTk4NDVjYjU2OTcwMCIsInN1YiI6IjJjNDhhNzIzLWQ1YTgtNDRlNS1iZDRlLTk4NDVjYjU2OTcwMCIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzMzM2VhNjk4LTdiMjItNDNiNC1iNGNkLTliNTlhZjQxMDk2ZS8iLCJhcHBpZCI6ImJlZjFhN2QxLWJlNWYtNDA4OC04OWQxLTc5M2FjNzZmNjg4MiIsImFwcGlkYWNyIjoiMiJ9.eNJ6EvsAw1FAVyeV7FRVZAWmHT_gA7VoLQxm_1Te6aAcwLUxGxk0CJVwXIF3KhQ3uonBowLviRIop47XMiNmAFBEw6adA0l3MeH2PsW3gb6tutI4p3dax0WbnDcXp-ohZghARcp7iJTjpxjs4LBZzNt_XxNis-NRgOZ7B-T_pBLEf1kDs2R_mmjX9Y1mwYvPtymUBeyOhAFDUUo_HKV6S6sOhTAoncugBhxPBiVx-soiCrJreL2en_ULiLH4nv6TII4_4FmAyCBM22Gv-RO0prrT0I0lY3Oh_LJV9AYCgjsAlPDz2NL8ts9X8qnh_GtT4Eb0HoUK5RGIkm3wW6Y8ZA'
}

test('obtainAccessToken() should return an AccessToken Promise', t => {
  const endpointConf: core.TokenEndpointConf = {
    url: 'http://endpoint.mock',
    httpMethod: 'POST'
  }

  // Mock token endpoint request and disable all other connections
  nock.disableNetConnect()
  nock(endpointConf.url)
    .intercept('/', endpointConf.httpMethod)
    .reply(200, expectedAccessToken)

  core.obtainAccessToken('mockClientID', certificate.derBuffer,
                         privateKey.pemBuffer, endpointConf)
    .then(res => t.is(res, expectedAccessToken))
})
