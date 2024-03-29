import { api } from "..";
import { IPost } from "../../interfaces/IPost";

export const GetAllPosts = async (): Promise<IPost[]> =>
  (await api.get("/posts")).data;
