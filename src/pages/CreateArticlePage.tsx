import { Fingerprint, At, Password, Plus, TextH } from "phosphor-react";
import { Link } from "react-router-dom";
import { FormBox } from "../components/FormBox";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { CheckBox } from "../components/CheckBox";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;

  div {
    flex-basis: 33.33%;
  }
`;

export const CreateArticlePage = () => {
  return (
    <FormBox>
      <h2 className="text-2xl font-bold tracking-wide text-primary-900">
        Create an Article
      </h2>
      <TextInput
        leftIcon={<TextH size={24} className="text-gray-500" />}
        placeholder="Enter a header"
      />
      <input type="file" />
      <textarea>Example</textarea>
      <div className="flex flex-col items-center lg:flex-row gap-1">
        <h3 className="font-semibold">Categories</h3>
        <Container>
          <CheckBox label="Software" />
          <CheckBox label="Software" />
          <CheckBox label="Software" />
          <CheckBox label="Software" />
          <CheckBox label="Software" />
          <CheckBox label="Software" />
        </Container>
      </div>
      <Button
        rightIcon={<Plus size={24} className="text-white" />}
        color="secondary"
      >
        Create
      </Button>
    </FormBox>
  );
};
