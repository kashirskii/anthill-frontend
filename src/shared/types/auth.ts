export type AuthSuccess = Readonly<{
  readonly access_token: string;
}>;

export type AuthError = Readonly<{
  readonly error: string;
  readonly message: string | string[];
  readonly statusCode: number;
}>;

export type LoginRequest = Readonly<{
  email: string;
  password: string;
}>;

export type RegistrationRequest = Readonly<{
  email: string;
  password: string;
  name: string;
}>;
