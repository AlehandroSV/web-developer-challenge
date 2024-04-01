export interface IPost {
  id: string;
  author: string;
  message: string;
  url: string;
  createDate: Date;
}

export interface ICreatePost {
  author: string;
  message: string;
  url?: string;
  createDate?: Date;
}
