import React, { useState } from "react";
import ReactQuill from "react-quill";

export const HtmlEditor = () => {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      placeholder="Type your content here"
      value={value}
      onChange={(value) => setValue(value)}
    />
  );
};
