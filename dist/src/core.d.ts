/// <reference types="node" />
import 'isomorphic-fetch';
export declare type ProvideTokenFn = () => Promise<AccessToken>;
export interface TokenEndpointConf {
    url: string;
    httpMethod: string;
}
export interface AccessToken {
    token_type: string;
    expires_in: string;
    scope: string;
    expires_on: string;
    not_before: string;
    resource: string;
    access_token: string;
}
export declare function createProvideTokenFn(clientID: string, derCertificate: Buffer, privateKey: Buffer, endpointConf: TokenEndpointConf): ProvideTokenFn;
