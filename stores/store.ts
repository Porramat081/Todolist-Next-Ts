import { create } from "zustand";

const store = create<any>();

export const useUserStore = store((set) => ({
  user: null,
  setUser: (newUser: any) => set(() => ({ user: newUser })),
}));
