export class CustomizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomizedError";
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
    this.stack = "";
  }
}

export class ConnectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConnectionError";
    this.stack = "";
  }
}
