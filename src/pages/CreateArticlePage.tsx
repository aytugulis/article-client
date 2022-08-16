import { Plus, TextH } from "phosphor-react";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { HtmlEditor } from "../components/HtmlEditor";
import { useAuth, useCreateArticle } from "../hooks";
import { Loading } from "../components/Loading";
import { RadioButtonList } from "../components/RadioButtonList";
import { useNavigate } from "react-router-dom";
import { FileInput } from "../components/FileInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { articleSchema } from "../schemas/articleSchema";
import { useQueryClient } from "react-query";

interface CreateArticleInput {
  category: string;
  content: string;
  header: string;
  file?: File[];
}

export const CreateArticlePage = () => {
  const queryClient = useQueryClient();
  const userData = useAuth();
  const navigate = useNavigate();
  const methods = useForm<CreateArticleInput>({
    resolver: yupResolver(articleSchema),
    defaultValues: { category: "Frontend", content: "" },
  });

  const createArticleHandler: SubmitHandler<CreateArticleInput> = (data) => {
    mutate(
      { ...data, file: data?.file?.[0], token: userData?.token },
      {
        onSuccess() {
          queryClient.invalidateQueries();
          navigate("/");
        },
      }
    );
  };

  const { mutate, isLoading } = useCreateArticle();
  return (
    <>
      {isLoading && <Loading />}
      <FormBox
        methods={methods}
        onSubmit={methods.handleSubmit(createArticleHandler)}
      >
        <h2 className="text-2xl font-bold tracking-wide text-primary-900">
          Create an Article
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
          Create
        </Button>
      </FormBox>
    </>
  );
};
