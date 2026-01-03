export interface User {
  id?: number;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  password?: string;   // usually optional on frontend
  image?: string | null;
  role_id: number;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
}

export const defaultUser: User = {
  id: undefined,
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
  image: null,
  role_id: 0,
  status: "active",
  created_at: "",
  updated_at: "",
};

