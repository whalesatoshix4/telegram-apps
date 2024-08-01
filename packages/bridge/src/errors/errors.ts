export const ERR_METHOD_UNSUPPORTED = 'ERR_METHOD_UNSUPPORTED';
export const ERR_METHOD_PARAMETER_UNSUPPORTED = 'ERR_METHOD_PARAMETER_UNSUPPORTED';
export const ERR_UNKNOWN_ENV = 'ERR_UNKNOWN_ENV';
export const ERR_INVOKE_CUSTOM_METHOD_RESPONSE = 'ERR_INVOKE_CUSTOM_METHOD_RESPONSE';
export const ERR_TIMED_OUT = 'ERR_TIMED_OUT';
export const ERR_UNEXPECTED_TYPE = 'ERR_UNEXPECTED_TYPE';
export const ERR_PARSE = 'ERR_PARSE';
export const ERR_NAVIGATION_HISTORY_EMPTY = 'ERR_NAVIGATION_LIST_EMPTY';
export const ERR_NAVIGATION_INDEX_INVALID = 'ERR_NAVIGATION_CURSOR_INVALID';
export const ERR_NAVIGATION_ITEM_INVALID = 'ERR_NAVIGATION_ITEM_INVALID';
export const ERR_SSR_INIT = 'ERR_SSR_INIT';
export const ERR_INVALID_PATH_BASE = 'ERR_INVALID_PATH_BASE';
export const ERR_POPUP_OPENED = 'ERR_POPUP_OPENED';
export const ERR_POPUP_INVALID_PARAMS = 'ERR_POPUP_INVALID_PARAMS';
export const ERR_INVOICE_OPENED = 'ERR_INVOICE_OPENED';
export const ERR_INVALID_HOSTNAME = 'ERR_INVALID_HOSTNAME';
export const ERR_INVALID_SLUG = 'ERR_INVALID_SLUG';
export const ERR_DATA_INVALID_SIZE = 'ERR_DATA_INVALID_SIZE';
export const ERR_ACCESS_DENIED = 'ERR_ACCESS_DENIED';
export const ERR_SCANNER_OPENED = 'ERR_SCANNER_OPENED';

export type ErrorType =
  | typeof ERR_METHOD_UNSUPPORTED
  | typeof ERR_METHOD_PARAMETER_UNSUPPORTED
  | typeof ERR_UNKNOWN_ENV
  | typeof ERR_INVOKE_CUSTOM_METHOD_RESPONSE
  | typeof ERR_TIMED_OUT
  | typeof ERR_PARSE
  | typeof ERR_UNEXPECTED_TYPE
  | typeof ERR_NAVIGATION_HISTORY_EMPTY
  | typeof ERR_NAVIGATION_INDEX_INVALID
  | typeof ERR_NAVIGATION_ITEM_INVALID
  | typeof ERR_POPUP_OPENED
  | typeof ERR_POPUP_INVALID_PARAMS
  | typeof ERR_SSR_INIT
  | typeof ERR_INVALID_PATH_BASE
  | typeof ERR_INVOICE_OPENED
  | typeof ERR_INVALID_HOSTNAME
  | typeof ERR_INVALID_SLUG
  | typeof ERR_DATA_INVALID_SIZE
  | typeof ERR_ACCESS_DENIED
  | typeof ERR_SCANNER_OPENED;