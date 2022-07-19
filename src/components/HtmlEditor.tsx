import React, { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import { Error } from "./Error";

interface HtmlEditorProps {
  registerName: string;
}

export const HtmlEditor: React.FC<HtmlEditorProps> = ({ registerName }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const error = errors[registerName];

  useEffect(() => {
    register(registerName);
  }, [register]);

  const content = watch(registerName);

  return (
    <div className="flex flex-col">
      <ReactQuill
        theme="snow"
        value={content}
        onChange={(value) =>
          setValue(registerName, value, {
            shouldValidate: true,
          })
        }
        placeholder="Type your content here"
      />
      <Error error={error} />
    </div>
  );
};
