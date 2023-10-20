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
  id: number
  password: string;
  username: string;
  phone: string;
  description: string;
  user: number;
  email: string;
  profile: {
    description: string;
    id: number;
    avatar: string | null;
    background: string | null;
    phone: string;
    email: string;
    user: number;
  };
};


export type createIdeaType = {
  user: number;
  title: string;
  content: string;
  image: FileList;
};