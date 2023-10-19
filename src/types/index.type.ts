export interface IdeasType {
  id?: number;
  title: string;
  content: string;
  views?: number;
  user?: number;
  photo_1: string;
  photo_2: string;
  photo_3: string;
  photo_4: string;
}

export interface UserType {
  id: number;
  email: string;
  username: string;
  password: string;
  profile: {
    id: number;
    description: string;
    phone: string;
    avatar: string;
    background: string;
    user: number
  }
}


export type Inputs = {
  email: string;
  username: string;
  password: string;
};

export type ProfileType = {
  email: string;
  password: string;
  username: string;
  phone: string;
  description: string;
}
