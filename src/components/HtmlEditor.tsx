import React, { useState } from "react";
import ReactQuill from "react-quill";

interface HtmlEditorProps {
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

export const HtmlEditor: React.FC<HtmlEditorProps> = ({ setContent }) => {
  return (
    <ReactQuill
      placeholder="Type your content here"
      /*     value={value} */
      onChange={(value) => setContent(value)}
    />
  );
};
