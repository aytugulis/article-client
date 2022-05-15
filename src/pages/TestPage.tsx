import { Heart, Horse } from "phosphor-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { useQuery } from "react-query";
import { Endpoints } from "../type/Endpoints";
import { Loading } from "../components/Loading";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const TestPage = () => {
  const { data, isLoading } = useQuery<{ name: string }, Error>([
    Endpoints.test,
    { queryObject: { name: "aytug" } },
  ]);

  return <>{isLoading ? <Loading /> : <p>{JSON.stringify(data)}</p>}</>;
};
