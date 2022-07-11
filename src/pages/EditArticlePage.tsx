import { Plus, TextH } from "phosphor-react";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { FileInput } from "../components/FileInput";
import { FormBox } from "../components/FormBox";
import { HtmlEditor } from "../components/HtmlEditor";
import { Loading } from "../components/Loading";
import { RadioButtonList } from "../components/RadioButtonList";
import { TextInput } from "../components/TextInput";
import { useArticle, useAuth, useUpdateArticle } from "../hooks";

export const EditArticlePage = () => {
  const { id } = useParams();

  const userData = useAuth();
  const { data } = useArticle(id!);
  const { mutate, isSuccess, isLoading } = useUpdateArticle();

  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [header, setHeader] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  useEffect(() => {
    setCategory(data?.category || "");
    setContent(data?.content || "");
    setHeader(data?.header || "");
  }, [data]);

  function updateArticleHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (!id) return;
    mutate({ category, content, header, file, token: userData?.token, id });
  }
  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && <Navigate to="/my-articles" />}
      <FormBox>
        <h2 className="text-2xl font-bold tracking-wide text-primary-900">
          Update the Article
        </h2>
        <TextInput
          onChange={(e) => setHeader(e.target.value)}
          leftIcon={<TextH size={24} className="text-tropical-blue" />}
          placeholder="Enter a header"
          value={header}
        />
        <FileInput onChange={(e) => setFile(e.target.files?.[0])} />
        <HtmlEditor setContent={setContent} value={content} />
        <div className="flex flex-col items-center lg:flex-row gap-1">
          <h3 className="font-semibold">Categories</h3>

          <RadioButtonList selectedValue={category} setCategory={setCategory} />
        </div>
        <Button
          onClick={(e) => updateArticleHandler(e)}
          rightIcon={<Plus size={24} className="text-white" />}
          color="tropical-blue"
        >
          Update
        </Button>
      </FormBox>
    </>
  );
};
