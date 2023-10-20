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
  photo_1: string;
  photo_2: string;
  photo_3: string;
  photo_4: string;
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
};

// {
//   "id": 1,
//   "update": "2023-10-20T05:54:49.287711+06:00",
//   "category": {
//       "id": 1,
//       "category": "test 1"
//   },
//   "voice": {
//       "id": 1,
//       "choice": true,
//       "idea": 1,
//       "user": 1
//   },
//   "title": "cbkVCDs",
//   "content": "test time 2",
//   "photo_1": "http://192.168.88.59:8000/media/idea/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-04-23_%D0%B2_15.43.42_auto_x2_k8EUdNS.jpg",
//   "photo_2": null,
//   "photo_3": null,
//   "photo_4": null,
//   "create": "2023-10-20T05:28:49.933335+06:00",
//   "like": 3,
//   "dislike": -2,
//   "views": 47,
//   "user": 1,
//   "cat": 1
// }
