import { create } from 'zustand';
import type { LoginFormValuesType, SignUpFormValuesType } from '../types/form';
import { persist } from 'zustand/middleware';

type User = {
  email: string;
  birth: string;
  jobCategory: string;
  interests: string[];
};

type AuthStore = {
  user: User | null;
  isLoggedIn: boolean;
  login: ({ email, password }: LoginFormValuesType) => boolean;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,

      login: ({ email, password }: LoginFormValuesType) => {
        const users: SignUpFormValuesType[] = JSON.parse(localStorage.getItem('users') || '[]');
        const matched = users.find((user) => user.email === email && user.password === password);

        if (matched) {
          set({
            user: {
              email: matched.email,
              birth: matched.birth,
              jobCategory: matched.jobCategory,
              interests: matched.interests,
            },
            isLoggedIn: true,
          });
          return true;
        }
        return false;
      },

      logout: () => set({ user: null, isLoggedIn: false }),

      updateUser: (updated: User) => {
        const state = get();
        if (!state.user) return;

        const updateUser = { ...state.user, ...updated };
        const users: SignUpFormValuesType[] = JSON.parse(localStorage.getItem('users') || '[]');

        const updatedUsers = users.map((user: User) =>
          user.email === state.user?.email ? { ...user, ...updated } : user,
        );

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        set({ user: updateUser });
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({ user: state.user, isLoggedIn: state.isLoggedIn }),
    },
  ),
);
