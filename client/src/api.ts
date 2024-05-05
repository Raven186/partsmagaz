import type { User, UserRegister, UserSignInn } from "./components/Auth/types";
import { Car } from "./components/Main/types";
import { Part } from "./components/PartItem/types";

// проверка авторизации
export const fetchCheckUser = async (): Promise<User> => {
  const res = await fetch("/api/auth/check");
  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }
  const data: { user: User } = (await res.json()) as { user: User };
  return data.user;
};

// регистрация
export const fetchRegister = async (user: UserRegister): Promise<User> => {
  const res = await fetch("/api/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }
  const data: { message: string; user: User } = (await res.json()) as {
    message: string;
    user: User;
  };
  return data.user;
};

// ВХОД
export const fetchLogin = async (user: UserSignInn): Promise<User> => {
  const res = await fetch("/api/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }

  const data: { message: string; user: User } = (await res.json()) as {
    message: string;
    user: User;
  };
  return data.user;
};

// ВЫХОД
export const fetchLogout = async (): Promise<void> => {
  const res = await fetch("/api/auth/logout");
  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }
  const data: { message: string } = (await res.json()) as { message: string };
  if (data.message !== "success") {
    throw new Error(data.message);
  }
};

// получение списка машин
export const fetchGetCars = async (): Promise<Car[]> => {
  const response = await fetch("/api/cars");
  const data: Car[] = (await response.json()) as Car[];
  return data;
};

// получение списка запчастей
export const fetchGetParts = async (): Promise<Part> => {
  const res = await fetch("/api/parts");
  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }
  const data = await res.json();
  return data;
};

//добывление запчасти
export const fetchAddPart = async (part: any): Promise<Part> => {
  const res = await fetch("/api/parts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(part),
  });
  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }
  const data = await res.json();
  return data;
};
