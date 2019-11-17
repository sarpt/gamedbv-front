import { AjaxError, AjaxTimeoutError } from 'rxjs/ajax';

const CONNECTION_ERROR = 'Connection error';
const BACKEND_ERROR = 'Backend error';

type Error = AjaxError | AjaxTimeoutError;
export const getAjaxErrorMessage = (error: Error): string => {
  return error.status === 0 ? CONNECTION_ERROR : BACKEND_ERROR;
};
