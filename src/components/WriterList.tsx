import { useQuery } from "react-query";
import { Endpoints } from "../type/Endpoints";
import { GetTopAuthors } from "../type/ServiceResponse";
import { Loading } from "./Loading";
import { WriterCard } from "./WriterCard";

export const WriterList = () => {
  const { data, isLoading } = useQuery<GetTopAuthors, Error>([
    Endpoints.getTopAuthors,
    { queryObject: { limit: 6 } },
  ]);
  return (
    <>
      {isLoading && <Loading />}
      <ul className="flex items-center flex-wrap">
        {data?.topAuthors.map(({ author }) => (
          <WriterCard
            key={author._id}
            profileImage={author.imageUrl}
            fullName={author.name}
            description={author.description}
          />
        ))}
      </ul>
    </>
  );

  return <>asd</>;
};
