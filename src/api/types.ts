// Define the core types for Blog and Writer
export interface Blog {
  id: number;
  title: string;
  content: string;
  writerId: number; // Foreign key linking to Writer
}

export interface Writer {
  id: number;
  name: string;
  email: string;
}

// Define specific payload types for mutations
export type NewBlog = Omit<Blog, "id">; // Blog without an ID for creation
export type UpdateBlog = Partial<NewBlog>; // Optional fields for updating

export type NewWriter = Omit<Writer, "id">;
export type UpdateWriter = Partial<NewWriter>;

// Define types for Authentication
export interface Credentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
}
