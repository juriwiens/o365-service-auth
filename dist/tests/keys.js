"use strict";
exports.privateKey = {
    pemString: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAvtH4wKLYlIXZlfYQFJtXZVC3fD8XMarzwvb/fHUyJ6NvNStN
+H7GHp3/QhZbSaRyqK5hu5xXtFLgnI0QG8oE1NlXbczjH45LeHWhPIdc2uHSpzXi
c78kOugMY1vng4J10PF6+T2FNaiv0iXeIQq9xbwwPYpflViQyJnzGCIZ7VGan6Gb
RKzyTKcB58yx24pJq+CviLXEY52TIW1l5imcjGvLtlCp1za9qBZa4XGoVqHi1kRX
kdDSHty6lZWj3KxoRvTbiaBCH+75U7rifS6fR9lqjWE57bCGoz7+BBu9YmPKtI1K
kyHFqWpxaJc/AKf9xgg+UumeqVcirUmAsHJrMwIDAQABAoIBAQCYKw05YSNhXVPk
eHLeW/pXuwR3OkCexPrakOmwMC0s2vIF7mChN0d6hvhVlUp68X7V8SnS2JxAGo8v
iHY+Et3DdwZ3cxnzwh+BEhzgDfoIOmkoGppZPyX/K6klWtbGUrTtSISOWXbvEXQU
G0qGAvDOzIGTsdMDX7slnU70Ac23JybPY5qBSiE+ky8U4dm2fUHMroWub4QP5vA/
nqyWqX2FB/MEAbcujaknDQrFCtbmtUYlBbJCKGd9V3cGEqp6H7oH+ah2ofMc91gJ
mCHk3YyWZB/bcVXH3CA+s1ywvCOVDBZ3Nw7Pt9zIcv6Rl9UKIy+Nx0QjXxR90Hla
Tr0GHIShAoGBAPsD7uXm+0ksnGyKRYgvlVad8Z8FUFT6bf4B+vboDbx40FO8O/5V
PraBPC5z8YRSBOQ/WfccPQzakkA28F2pXlRpXu5JcErVWnyyUiKpX5sw6iPenQR2
JO9hY/GFbKiwUhVHpvWMcXFqFLSQu2A86jPnFFEfG48ZT4IhTzINKJVZAoGBAMKc
B3YGfVfY9qiRFXzYRdSRLg5c8p/HzuWwXc9vfJ4kQTDkPXe/+nqD67rzeT54uVec
jKoIrsCu4BfEaoyvOT+1KmUfdEpBgYZuuEC4CZf7dgKbXOpPVvZDMyJ/e7HyqTpw
mvIYJLPm2fNAcAsnbrNX5mhLwwzEIltbplUUeRdrAoGBAKhZgPYsLkhrZRXevreR
wkTvdUfD1pbHxtFfHqROCjhnhsFCM7JmFcNtdaFqHYczQxiZ7IqxI7jlNsVek2Md
3qgaa5LBKlDmOuP67N9WXUrGSaJ5ATIm0qrB1Lf9VlzktIiVH8L7yHHaRby8fQ8U
i7b3ukaV6HPW895A3M6iyJ8xAoGAInp4S+3MaTL0SFsj/nFmtcle6oaHKc3BlyoP
BMBQyMfNkPbu+PdXTjtvGTknouzKkX4X4cwWAec5ppxS8EffEa1sLGxNMxa19vZI
yJaShI21k7Ko3I5f7tNrDNKfPKCsYMEwgnHKluDwfktNTnyW/Uk2dgXuMaXSHHN5
XZt59K8CgYArGVOWK7LUmf3dkTIs3tXBm4/IMtUZmWmcP9C8Xe/Dg/IdQhK5CIx4
VXl8rgZNeX/5/4nJ8Q3LrdLau1Iz620trNRGU6sGMs3x4WQbSq93RRbFzfG1oK74
IOo5yIBxImQOSk5jz31gF9RJb15SDBIxonuWv8qAERyUfvrmEwR0kg==
-----END RSA PRIVATE KEY-----`,
    get pemBuffer() { return Buffer.from(this.pemString); },
    derBase64: `MIIDAjCCAeoCCQDGffPLD9tFPTANBgkqhkiG9w0BAQUFADBDMQswCQYDVQQGEwJERTETMBEGA1UECBMKU29tZS1TdGF0ZTEfMB0GA1UEChMWS2Vza2luIEZlbnN0ZXJiYXUgR21iSDAeFw0xNTA5MjgxMjEwMTlaFw0xNjA5MjcxMjEwMTlaMEMxCzAJBgNVBAYTAkRFMRMwEQYDVQQIEwpTb21lLVN0YXRlMR8wHQYDVQQKExZLZXNraW4gRmVuc3RlcmJhdSBHbWJIMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwRMh0ZzMtZG774NQyVR/8XMWhaYkVcQyLGKA0ODr2D0oEzgxqLKfTf28DhizvFFBc8QUzC1zCCcZVe7wrn5P+fW9Oy7EeSaBCt5/83id5ui9I16XhRA1PEkJzx1ZRjLqPX8U/43ueDTJi+cnpyY5PIz4rhxzWSGbSN+4duEyfQKHYdI02MdAPXSNNuJOYgyhzQa1Pso4NooQCENhTCBN1ljjaBOEYwvii41K+18Lw1YcJoWX8zmwBi3AjYYwq16Tmg/kO1yo9InBMBjSnp07ommZofZpc/AWYJLxf+3w/vfwGaDAyVh8RBKT8D7G7ovMvdahzOyxE2wNKFpPOfys9QIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQCBM74gQpDbZaImow9x40tUEFgV7CL1yfkPGIpC4HLNhqeKIErEQBwfVzocyJT0u3xF3LDdKASDIrAuwlImuppwHqzkOoGyLr2NqjXIUtiS+p7P0WQHFnEG6oURdaW4Q47hBkHK0aimkfkaU+EPflaL5dNHUoqAzJWgt/xml2fJOmsjPj1Bo0TtV51hjFCnr7pODyzw6KuAgJTEolBvzcKo4VryWNvpFhr9Ui8cw1TJcyifUwVMwCFpwEu2pLXdqfrbrN+seuymHoFQo79Mctl8uwljl/ZztnzNRU4E/ometLdTj/jezZeZhf5bgDYu0a6eY8dx8STJF3m4YdVeIHOQ`,
    get derBuffer() { return Buffer.from(this.derBase64, 'base64'); }
};
exports.certificate = {
    pemBuffer: new Buffer(`-----BEGIN CERTIFICATE-----
MIIDtTCCAp2gAwIBAgIJAMKR/NsyfcazMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNV
BAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX
aWRnaXRzIFB0eSBMdGQwHhcNMTIxMTEyMjM0MzQxWhcNMTYxMjIxMjM0MzQxWjBF
MQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50
ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
CgKCAQEAvtH4wKLYlIXZlfYQFJtXZVC3fD8XMarzwvb/fHUyJ6NvNStN+H7GHp3/
QhZbSaRyqK5hu5xXtFLgnI0QG8oE1NlXbczjH45LeHWhPIdc2uHSpzXic78kOugM
Y1vng4J10PF6+T2FNaiv0iXeIQq9xbwwPYpflViQyJnzGCIZ7VGan6GbRKzyTKcB
58yx24pJq+CviLXEY52TIW1l5imcjGvLtlCp1za9qBZa4XGoVqHi1kRXkdDSHty6
lZWj3KxoRvTbiaBCH+75U7rifS6fR9lqjWE57bCGoz7+BBu9YmPKtI1KkyHFqWpx
aJc/AKf9xgg+UumeqVcirUmAsHJrMwIDAQABo4GnMIGkMB0GA1UdDgQWBBTs83nk
LtoXFlmBUts3EIxcVvkvcjB1BgNVHSMEbjBsgBTs83nkLtoXFlmBUts3EIxcVvkv
cqFJpEcwRTELMAkGA1UEBhMCQVUxEzARBgNVBAgTClNvbWUtU3RhdGUxITAfBgNV
BAoTGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZIIJAMKR/NsyfcazMAwGA1UdEwQF
MAMBAf8wDQYJKoZIhvcNAQEFBQADggEBABw7w/5k4d5dVDgd/OOOmXdaaCIKvt7d
3ntlv1SSvAoKT8d8lt97Dm5RrmefBI13I2yivZg5bfTge4+vAV6VdLFdWeFp1b/F
OZkYUv6A8o5HW0OWQYVX26zIqBcG2Qrm3reiSl5BLvpj1WSpCsYvs5kaO4vFpMak
/ICgdZD+rxwxf8Vb/6fntKywWSLgwKH3mJ+Z0kRlpq1g1oieiOm1/gpZ35s0Yuor
XZba9ptfLCYSggg/qc3d3d0tbHplKYkwFm7f5ORGHDSD5SJm+gI7RPE+4bO8q79R
PAfbG1UGuJ0b/oigagciHhJp851SQRYf3JuNSc17BnK2L5IEtzjqr+Q=
-----END CERTIFICATE-----`),
    derBase64: `MIIDtTCCAp2gAwIBAgIJAMKR/NsyfcazMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwHhcNMTIxMTEyMjM0MzQxWhcNMTYxMjIxMjM0MzQxWjBFMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvtH4wKLYlIXZlfYQFJtXZVC3fD8XMarzwvb/fHUyJ6NvNStN+H7GHp3/QhZbSaRyqK5hu5xXtFLgnI0QG8oE1NlXbczjH45LeHWhPIdc2uHSpzXic78kOugMY1vng4J10PF6+T2FNaiv0iXeIQq9xbwwPYpflViQyJnzGCIZ7VGan6GbRKzyTKcB58yx24pJq+CviLXEY52TIW1l5imcjGvLtlCp1za9qBZa4XGoVqHi1kRXkdDSHty6lZWj3KxoRvTbiaBCH+75U7rifS6fR9lqjWE57bCGoz7+BBu9YmPKtI1KkyHFqWpxaJc/AKf9xgg+UumeqVcirUmAsHJrMwIDAQABo4GnMIGkMB0GA1UdDgQWBBTs83nkLtoXFlmBUts3EIxcVvkvcjB1BgNVHSMEbjBsgBTs83nkLtoXFlmBUts3EIxcVvkvcqFJpEcwRTELMAkGA1UEBhMCQVUxEzARBgNVBAgTClNvbWUtU3RhdGUxITAfBgNVBAoTGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZIIJAMKR/NsyfcazMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADggEBABw7w/5k4d5dVDgd/OOOmXdaaCIKvt7d3ntlv1SSvAoKT8d8lt97Dm5RrmefBI13I2yivZg5bfTge4+vAV6VdLFdWeFp1b/FOZkYUv6A8o5HW0OWQYVX26zIqBcG2Qrm3reiSl5BLvpj1WSpCsYvs5kaO4vFpMak/ICgdZD+rxwxf8Vb/6fntKywWSLgwKH3mJ+Z0kRlpq1g1oieiOm1/gpZ35s0YuorXZba9ptfLCYSggg/qc3d3d0tbHplKYkwFm7f5ORGHDSD5SJm+gI7RPE+4bO8q79RPAfbG1UGuJ0b/oigagciHhJp851SQRYf3JuNSc17BnK2L5IEtzjqr+Q=`,
    get derBuffer() { return Buffer.from(this.derBase64, 'base64'); }
};
//# sourceMappingURL=keys.js.map