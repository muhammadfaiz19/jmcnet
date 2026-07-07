export interface Admin {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  admin: Admin;
  token: string;
}
