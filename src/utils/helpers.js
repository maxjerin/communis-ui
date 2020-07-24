import Cookies from 'js-cookie';
import { GLOBAL_CONSTANT } from './constants';

export function handleError(dispatch, error, type) {
  switch (error.response.status) {
    case 400:
      let errorData = error.response.data.break;
    default:
  }
}
