import { Endpoint } from "../../types/Endpoint";
import { useMutation } from "react-query";
import { axiosClient } from "../../utils/client";

interface CreateArticleProps {
  header: string;
  content: string;
  category: string;
  token?: string;
  file?: File;
}
interface CreateArticleResponse {
  message: string;
}

const createArticle = async ({
  header,
  content,
  category,
  file,
  token,
}: CreateArticleProps) => {
  const formData = new FormData();
  formData.append("header", header);
  formData.append("content", content);
  formData.append("category", category);
  if (file) formData.append("file", file);

  const { data } = await axiosClient.post(Endpoint.article, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
export function useCreateArticle() {
  return useMutation<CreateArticleResponse, Error, CreateArticleProps>(
    (props) => {
      return createArticle(props);
    }
  );
}

interface DeleteArticleProps {
  id: string;
  token: string;
}
interface DeleteArticleResponse {
  message: string;
}

const deleteArticle = async ({ id, token }: DeleteArticleProps) => {
  const { data } = await axiosClient.delete(Endpoint.deleteArticle(id), {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
export function useDeleteArticle() {
  return useMutation<DeleteArticleResponse, Error, DeleteArticleProps>(
    (props) => {
      return deleteArticle(props);
    },
    {
      mutationKey: "posts",
    }
  );
}

interface UpdateArticleProps {
  header: string;
  id: string;
  content: string;
  category: string;
  token?: string;
  file?: File;
}
interface UpdateArticleResponse {
  message: string;
}

const updateArticle = async ({
  header,
  content,
  category,
  file,
  token,
  id,
}: UpdateArticleProps) => {
  const formData = new FormData();
  formData.append("header", header);
  formData.append("content", content);
  formData.append("category", category);
  if (file) formData.append("file", file);

  const { data } = await axiosClient.put(Endpoint.updateArticle(id), formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
export function useUpdateArticle() {
  return useMutation<UpdateArticleResponse, Error, UpdateArticleProps>(
    (props) => {
      return updateArticle(props);
    }
  );
}
