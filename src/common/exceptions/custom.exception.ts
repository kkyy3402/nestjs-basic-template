export class CustomException extends Error {
  constructor(public readonly message: string) {
    super();
    this.message = `Custom Exception: ${message}`;
  }
}
