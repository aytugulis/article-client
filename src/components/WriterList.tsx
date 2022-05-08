import { WriterCard } from "./WriterCard";

export const WriterList = () => {
  return (
    <ul className="flex items-center flex-wrap">
      <WriterCard
        profileImage="https://media-exp1.licdn.com/dms/image/C5603AQH7CCKjPEEkZw/profile-displayphoto-shrink_800_800/0/1609592718275?e=1657756800&v=beta&t=wJ-lU3zGG8qkoAGx35tD6FEmoghu5NvW5EYhc7xBRzI"
        fullName="Aytuğ Ulış"
        description="Description of the writer."
      />
      <WriterCard
        profileImage="https://media-exp1.licdn.com/dms/image/C5603AQH7CCKjPEEkZw/profile-displayphoto-shrink_800_800/0/1609592718275?e=1657756800&v=beta&t=wJ-lU3zGG8qkoAGx35tD6FEmoghu5NvW5EYhc7xBRzI"
        fullName="Aytuğ Ulış"
        description="Description of the writer."
      />
      <WriterCard
        profileImage="https://media-exp1.licdn.com/dms/image/C5603AQH7CCKjPEEkZw/profile-displayphoto-shrink_800_800/0/1609592718275?e=1657756800&v=beta&t=wJ-lU3zGG8qkoAGx35tD6FEmoghu5NvW5EYhc7xBRzI"
        fullName="Aytuğ Ulış"
        description="Description of the writer."
      />
    </ul>
  );
};
