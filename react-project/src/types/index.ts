export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ValuesProps {
  name?: string;
  username?: string;
  email?: string;
  gender?: string;
  password?: string;
  repeatPassword?: string;
}
