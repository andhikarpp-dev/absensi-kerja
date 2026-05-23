// JSend Response Interfaces
// Spec: https://github.com/omniti-labs/jsend

export interface JsendSuccess<T> {
  status: 'success';
  data: T;
}

export interface JsendFail {
  status: 'fail';
  data: Record<string, string>;
}

export interface JsendError {
  status: 'error';
  message: string;
  code?: number;
  data?: unknown;
}

export type JsendResponse<T> = JsendSuccess<T> | JsendFail | JsendError;

