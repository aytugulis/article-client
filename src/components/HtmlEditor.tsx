import React, { useState } from "react";
import ReactQuill from "react-quill";

interface HtmlEditorProps {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
}

export const HtmlEditor: React.FC<HtmlEditorProps> = ({
  setContent,
  value,
}) => {
  return (
    <ReactQuill
      placeholder="Type your content here"
      value={value}
      onChange={(value) => setContent(value)}
    />
  );
};
