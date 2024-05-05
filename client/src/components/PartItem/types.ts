export type Part = {
  brand: string;
  vin: string;
  price: number;
  count: number;
  photo: string;
  articul: string;
};

export type PartsState = {
  parts: Part[];
  error: string | undefined;
  loading: boolean;
};
