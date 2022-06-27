import { Author } from "./../type/Author";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserData extends Author {
  token: string;
}
interface BearState {
  userData?: UserData;
  authorize: (user: UserData) => void;
  logout: () => void;
}

export const useStore = create<BearState>()(
  devtools(
    persist((set) => ({
      userData: undefined,
      authorize: (userData) => set({ userData }),
      logout: () => set({ userData: undefined }),
    }))
  )
);
