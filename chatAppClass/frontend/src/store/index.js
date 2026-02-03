import { create } from "zustand";
import { userInfo } from "./slices/authSlice";

export const useAppStore = create()((...a) => ({
  ...userInfo(...a),
}));
