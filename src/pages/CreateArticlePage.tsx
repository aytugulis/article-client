import { Plus, TextH } from "phosphor-react";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { HtmlEditor } from "../components/HtmlEditor";
import { useAuth, useCreateArticle } from "../hooks";
import { useState } from "react";
import { Loading } from "../components/Loading";
import { RadioButtonList } from "../components/RadioButtonList";
import { Navigate } from "react-router-dom";
import { FileInput } from "../components/FileInput";

export const CreateArticlePage = () => {
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [header, setHeader] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  const userData = useAuth();

  function createArticleHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    mutate({ category, content, header, file, token: userData?.token });
  }

  const { mutate, isLoading, isSuccess } = useCreateArticle();
  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && <Navigate to="/" />}
      <FormBox>
        <h2 className="text-2xl font-bold tracking-wide text-primary-900">
          Create an Article
        </h2>
        <TextInput
          onChange={(e) => setHeader(e.target.value)}
          leftIcon={<TextH size={24} className="text-tropical-blue" />}
          placeholder="Enter a header"
        />
        <FileInput onChange={(e) => setFile(e.target.files?.[0])} />
        <HtmlEditor setContent={setContent} />
        <div className="flex flex-col items-center lg:flex-row gap-1">
          <h3 className="font-semibold">Categories</h3>

          <RadioButtonList setCategory={setCategory} />
        </div>
        <Button
          onClick={(e) => createArticleHandler(e)}
          rightIcon={<Plus size={24} className="text-white" />}
          color="tropical-blue"
        >
          Create
        </Button>
      </FormBox>
    </>
  );
};
