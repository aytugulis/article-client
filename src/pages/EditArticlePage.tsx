import { yupResolver } from "@hookform/resolvers/yup";
import { Plus, TextH } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { FileInput } from "../components/FileInput";
import { FormBox } from "../components/FormBox";
import { HtmlEditor } from "../components/HtmlEditor";
import { Loading } from "../components/Loading";
import { RadioButtonList } from "../components/RadioButtonList";
import { TextInput } from "../components/TextInput";
import {
  useArticle,
  useAuth,
  useUnenabledArticle,
  useUpdateArticle,
} from "../hooks";
import { articleSchema } from "../schemas/articleSchema";

interface EditArticleInput {
  category: string;
  content: string;
  header: string;
  file?: File[];
}

const Form = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userData = useAuth();
  const { data } = useUnenabledArticle(id!);
  const methods = useForm<EditArticleInput>({
    resolver: yupResolver(articleSchema),
    defaultValues: {
      category: data?.category,
      content: data?.content,
      header: data?.header,
    },
  });

  const { mutate, isLoading } = useUpdateArticle();

  const updateArticleHandler: SubmitHandler<EditArticleInput> = (data) => {
    if (!id) return;
    mutate(
      { ...data, file: data?.file?.[0], token: userData?.token, id },
      {
        onSuccess() {
          queryClient.invalidateQueries();
          navigate("/my-articles");
        },
      }
    );
  };

  return (
    <>
      {isLoading && <Loading />}
      <FormBox
        methods={methods}
        onSubmit={methods.handleSubmit(updateArticleHandler)}
      >
        <h2 className="text-2xl font-bold tracking-wide text-primary-900">
          Update the Article
        </h2>
        <TextInput
          registerName="header"
          leftIcon={<TextH size={24} className="text-tropical-blue" />}
          placeholder="Enter a header"
        />
        <FileInput registerName="file" />
        <HtmlEditor registerName="content" />

        <RadioButtonList registerName="category" />

        <Button
          rightIcon={<Plus size={24} className="text-white" />}
          color="tropical-blue"
        >
          Update
        </Button>
      </FormBox>
    </>
  );
};

export const EditArticlePage = () => {
  const { id } = useParams();
  const { isLoading: isGetLoading } = useArticle(id!);

  return <>{isGetLoading ? <Loading /> : <Form />}</>;
};
