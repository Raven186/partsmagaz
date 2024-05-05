export type Car = {
  id: number;
  brand: string;
  model: string;
  vin: string;
  user_id: number;
};

export type CarsState = {
  cars: Car[];
};

export type AddCar = {
  brand: string;
  model: string;
  vin: string;
  user_id: number;
};
