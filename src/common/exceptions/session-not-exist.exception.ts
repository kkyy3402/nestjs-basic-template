import { ErrorMessages } from '../constants';

export class SessionNotExistException extends Error {
  constructor() {
    super();
    this.message = ErrorMessages.SESSION_NOT_EXIST;
  }
}
