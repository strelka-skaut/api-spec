/**
 * @fileoverview gRPC-Web generated client stub for main
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_pb from './api_pb';


export class PageServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreatePage = new grpcWeb.MethodDescriptor(
    '/main.PageService/CreatePage',
    grpcWeb.MethodType.UNARY,
    api_pb.PageServiceCreatePageRequest,
    api_pb.PageServiceCreatePageResponse,
    (request: api_pb.PageServiceCreatePageRequest) => {
      return request.serializeBinary();
    },
    api_pb.PageServiceCreatePageResponse.deserializeBinary
  );

  createPage(
    request: api_pb.PageServiceCreatePageRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_pb.PageServiceCreatePageResponse>;

  createPage(
    request: api_pb.PageServiceCreatePageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_pb.PageServiceCreatePageResponse) => void): grpcWeb.ClientReadableStream<api_pb.PageServiceCreatePageResponse>;

  createPage(
    request: api_pb.PageServiceCreatePageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_pb.PageServiceCreatePageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/main.PageService/CreatePage',
        request,
        metadata || {},
        this.methodDescriptorCreatePage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/main.PageService/CreatePage',
    request,
    metadata || {},
    this.methodDescriptorCreatePage);
  }

  methodDescriptorGetPage = new grpcWeb.MethodDescriptor(
    '/main.PageService/GetPage',
    grpcWeb.MethodType.UNARY,
    api_pb.PageServiceGetPageRequest,
    api_pb.PageServiceGetPageResponse,
    (request: api_pb.PageServiceGetPageRequest) => {
      return request.serializeBinary();
    },
    api_pb.PageServiceGetPageResponse.deserializeBinary
  );

  getPage(
    request: api_pb.PageServiceGetPageRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_pb.PageServiceGetPageResponse>;

  getPage(
    request: api_pb.PageServiceGetPageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_pb.PageServiceGetPageResponse) => void): grpcWeb.ClientReadableStream<api_pb.PageServiceGetPageResponse>;

  getPage(
    request: api_pb.PageServiceGetPageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_pb.PageServiceGetPageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/main.PageService/GetPage',
        request,
        metadata || {},
        this.methodDescriptorGetPage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/main.PageService/GetPage',
    request,
    metadata || {},
    this.methodDescriptorGetPage);
  }

}

