import { useTopAuthors } from "../hooks/queries/user";
import { Loading } from "./Loading";
import { WriterCard } from "./WriterCard";

export const WriterList = () => {
  const { data, isLoading } = useTopAuthors();
  return (
    <>
      {isLoading && <Loading />}
      <ul className="flex items-center flex-wrap">
        {data?.topAuthors.map(({ author }) => (
          <WriterCard
            key={author._id}
            id={author._id}
            profileImage={author.imageUrl}
            fullName={author.name}
            description={author.description}
          />
        ))}
      </ul>
    </>
  );
};
