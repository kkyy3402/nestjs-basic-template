import { ErrorMessages } from '../constants';

export class UserNotExistException extends Error {
  constructor() {
    super();
    this.message = ErrorMessages.USER_NOT_EXIST;
  }
}
