# Setup

This doc explains how to setup a new certificate. Run all commands in a terminal.

## Generate certificate
First generate a private key (key.pem) and a self-signed certificate (cert.pem):
`openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 3650 -nodes`

Convert the certificate from PEM format to DER format:
`openssl x509 -in cert.pem -outform der -out cert.der`