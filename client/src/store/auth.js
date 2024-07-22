import { create } from "zustand";
import { pocketbase } from "../config";

export const useAuthStore = create((set) => ({
  register: async ({ role, email, password, passwordConfirm, name }) => {
    try {
      const record = await pocketbase.collection("users").create({
        email,
        password,
        passwordConfirm,
        name,
        role,
      });
      const login = await pocketbase
        .collection("users")
        .authWithPassword(email, password);
    } catch (error) {
      throw new Error("There was an error registering your account!");
    }
  },
  login: async ({ email, password }) => {
    try {
    } catch (error) {
      console.error(error);
    }
  },
}));
