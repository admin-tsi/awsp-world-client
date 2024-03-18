import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
  token: string;
  setToken: (by: any) => void;
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        token: '',
        setToken: (by) => set((state) => ({ token: by })),
      }),
      { name: 'micro' }
    )
  )
);
