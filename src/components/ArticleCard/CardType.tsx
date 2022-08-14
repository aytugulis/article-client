import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { useAuth, useDeleteArticle } from "../../hooks";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import { Loading } from "../Loading";

interface CardTypeProps {
  withIcon?: boolean;
  profileImage?: string;
  fullName?: string;
  id?: string;
}
export const CardType: React.FC<CardTypeProps> = ({
  withIcon,
  profileImage,
  fullName,
  id,
}) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useDeleteArticle();
  const user = useAuth();

  const deleteHandler = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!id || !user) return;

    await mutateAsync({ id, token: user.token });
    queryClient.invalidateQueries("posts");
  };

  if (!withIcon)
    return (
      <div className="flex items-center gap-2">
        {isLoading && <Loading />}
        <Avatar imageUrl={profileImage} size="xs" />
        <span className="text-xs font-medium text-gray-700">{fullName}</span>
      </div>
    );

  return (
    <div>
      {isLoading && <Loading />}
      <Link className="mr-1" to={`/edit-article/${id}`}>
        <Badge color="tropical-blue">Edit</Badge>
      </Link>
      <Badge onClick={(e) => deleteHandler(e)} color="secondary">
        Delete
      </Badge>
    </div>
  );
};
