import { Endpoint } from "../../type/Endpoint";
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
