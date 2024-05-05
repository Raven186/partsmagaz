export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  isAdmin: boolean;
};

export type UserSignInn = {
  email: string;
  password: string;
};

export type UserRegister = {
  name: string;
  email: string;
  password: string;
  rpassword: string;
};

export type AuthState = {
  user: User | undefined;
  error: string | undefined;
  loading: boolean;
};
