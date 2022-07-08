import { immer } from "zustand/middleware/immer";
import { Author } from "./../type/Author";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserData extends Author {
  token: string;
}
interface BearState {
  userData?: UserData;
  setUserData: (user: UserData) => void;
  logout: () => void;
}

export const useStore = create<BearState>()(
  devtools(
    immer(
      persist(
        (set) => ({
          userData: undefined,
          setUserData: (userData) => set({ userData }),
          logout: () => set({ userData: undefined }),
        }),
        {
          name: "zustandStorage",
        }
      )
    )
  )
);
