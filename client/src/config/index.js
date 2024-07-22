import PocketBase from "pocketbase";

export const pocketbase = new PocketBase(import.meta.env.VITE_POCKET_BASE_URL);
