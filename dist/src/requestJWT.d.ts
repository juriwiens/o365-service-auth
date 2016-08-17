/// <reference types="node" />
export declare type JWT = string;
export declare function createProvideJWTFn(clientID: string, tokenEndpointURL: string, certThumbprint: string, privateKey: Buffer): () => JWT;
