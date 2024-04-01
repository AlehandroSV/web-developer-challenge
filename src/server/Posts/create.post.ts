import { api } from "..";
import { ICreatePost } from "../../interfaces/IPost";

export const CreatePost = async (data: ICreatePost) => api.post("/posts", data);
