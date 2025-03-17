export class CryptoError extends Error {
  constructor(
    message: string,
    public code: string
  ) {
    super(message);
    this.name = "CryptoError";
  }
}

export class EncryptionError extends CryptoError {
  constructor(message = "Encryption failed.") {
    super(message, "ENCRYPTION_ERROR");
  }
}

export class DecryptionError extends CryptoError {
  constructor(message = "Decryption failed.") {
    super(message, "DECRYPTION_ERROR");
  }
}

export class InvalidPayloadError extends CryptoError {
  constructor(message = "Invalid payload format.") {
    super(message, "INVALID_PAYLOAD");
  }
}
