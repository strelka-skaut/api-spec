/**
 * @fileoverview gRPC-Web generated client stub for pages
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as pages_pb from './pages_pb';


export class ServiceClient {
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
    '/pages.Service/CreatePage',
    grpcWeb.MethodType.UNARY,
    pages_pb.CreatePageRequest,
    pages_pb.CreatePageResponse,
    (request: pages_pb.CreatePageRequest) => {
      return request.serializeBinary();
    },
    pages_pb.CreatePageResponse.deserializeBinary
  );

  createPage(
    request: pages_pb.CreatePageRequest,
    metadata: grpcWeb.Metadata | null): Promise<pages_pb.CreatePageResponse>;

  createPage(
    request: pages_pb.CreatePageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pages_pb.CreatePageResponse) => void): grpcWeb.ClientReadableStream<pages_pb.CreatePageResponse>;

  createPage(
    request: pages_pb.CreatePageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pages_pb.CreatePageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pages.Service/CreatePage',
        request,
        metadata || {},
        this.methodDescriptorCreatePage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pages.Service/CreatePage',
    request,
    metadata || {},
    this.methodDescriptorCreatePage);
  }

  methodDescriptorGetPage = new grpcWeb.MethodDescriptor(
    '/pages.Service/GetPage',
    grpcWeb.MethodType.UNARY,
    pages_pb.GetPageRequest,
    pages_pb.GetPageResponse,
    (request: pages_pb.GetPageRequest) => {
      return request.serializeBinary();
    },
    pages_pb.GetPageResponse.deserializeBinary
  );

  getPage(
    request: pages_pb.GetPageRequest,
    metadata: grpcWeb.Metadata | null): Promise<pages_pb.GetPageResponse>;

  getPage(
    request: pages_pb.GetPageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pages_pb.GetPageResponse) => void): grpcWeb.ClientReadableStream<pages_pb.GetPageResponse>;

  getPage(
    request: pages_pb.GetPageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pages_pb.GetPageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pages.Service/GetPage',
        request,
        metadata || {},
        this.methodDescriptorGetPage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pages.Service/GetPage',
    request,
    metadata || {},
    this.methodDescriptorGetPage);
  }

  methodDescriptorGetPages = new grpcWeb.MethodDescriptor(
    '/pages.Service/GetPages',
    grpcWeb.MethodType.UNARY,
    pages_pb.GetPagesRequest,
    pages_pb.GetPagesResponse,
    (request: pages_pb.GetPagesRequest) => {
      return request.serializeBinary();
    },
    pages_pb.GetPagesResponse.deserializeBinary
  );

  getPages(
    request: pages_pb.GetPagesRequest,
    metadata: grpcWeb.Metadata | null): Promise<pages_pb.GetPagesResponse>;

  getPages(
    request: pages_pb.GetPagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pages_pb.GetPagesResponse) => void): grpcWeb.ClientReadableStream<pages_pb.GetPagesResponse>;

  getPages(
    request: pages_pb.GetPagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pages_pb.GetPagesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pages.Service/GetPages',
        request,
        metadata || {},
        this.methodDescriptorGetPages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pages.Service/GetPages',
    request,
    metadata || {},
    this.methodDescriptorGetPages);
  }

  methodDescriptorDeletePage = new grpcWeb.MethodDescriptor(
    '/pages.Service/DeletePage',
    grpcWeb.MethodType.UNARY,
    pages_pb.DeletePageRequest,
    pages_pb.DeletePageResponse,
    (request: pages_pb.DeletePageRequest) => {
      return request.serializeBinary();
    },
    pages_pb.DeletePageResponse.deserializeBinary
  );

  deletePage(
    request: pages_pb.DeletePageRequest,
    metadata: grpcWeb.Metadata | null): Promise<pages_pb.DeletePageResponse>;

  deletePage(
    request: pages_pb.DeletePageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pages_pb.DeletePageResponse) => void): grpcWeb.ClientReadableStream<pages_pb.DeletePageResponse>;

  deletePage(
    request: pages_pb.DeletePageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pages_pb.DeletePageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pages.Service/DeletePage',
        request,
        metadata || {},
        this.methodDescriptorDeletePage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pages.Service/DeletePage',
    request,
    metadata || {},
    this.methodDescriptorDeletePage);
  }

}

