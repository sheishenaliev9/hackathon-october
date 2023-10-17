export interface IdeasType {
  id?: number;
  title: string;
  content: string;
  views?: number;
  user?: number;
  photo_1: string,
  photo_2: string,
  photo_3: string,
  photo_4: string,
}


export interface UserType {
  email: string,
  username: string,
  password: string
}
