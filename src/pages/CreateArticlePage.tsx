import { Plus, TextH } from "phosphor-react";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { CheckBox } from "../components/CheckBox";

import styled from "styled-components";
import { HtmlEditor } from "../components/HtmlEditor";
import { useCreateArticle } from "../hooks/mutations/article";
import { useState } from "react";
import { Loading } from "../components/Loading";
import { useStore } from "../store/zustand";
import { RadioButtonList } from "../components/RadioButtonList";
import { Navigate } from "react-router-dom";
import { FileInput } from "../components/FileInput";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;

  div {
    flex-basis: 33.33%;
  }
`;

export const CreateArticlePage = () => {
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [header, setHeader] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  const userData = useStore((state) => state.userData);

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
