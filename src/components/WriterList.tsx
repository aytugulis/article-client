import { WriterCard } from "./WriterCard";

export const WriterList = () => {
  return (
    <ul className="flex items-center flex-wrap">
      <WriterCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        description="Description of the writer."
      />
      <WriterCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        description="Description of the writer."
      />
      <WriterCard
        profileImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        fullName="Aytuğ Ulış"
        description="Description of the writer."
      />
    </ul>
  );
};
