export interface IdeasType {
  id?: number;
  voice: {
    id: number;
    choice: boolean;
    idea: number;
    user: number;
  };
  title: string;
  content: string;
  views?: number;
  user?: number;
  photo: string;
  like: number;
  dislike: number;
}

export interface UserType {
  id: number;
  email: string;
  username: string;
  password: string;
  profile: {
    id: number;
    email: string;
    description: string;
    phone: string;
    avatar: string;
    background: string;
    user: number;
  };
}

export type Inputs = {
  username: string;
  password: string;
  email: string;
};

export type ProfileType = {
  email: string;
  password: string;
  username: string;
  phone: string;
  description: string;
  user: number;
  profile: object;
};

export type createIdeaType = {
  image: string;
  title: string;
  content: string;
  user: number;
};
