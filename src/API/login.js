import { ServiceInstance } from "../api.config";

export const login =async (payload) => {
  try {
    const result = await ServiceInstance.post("/register", payload);
    return { ok: true, data: result, error: null };
  } catch (error) {
    return { ok: false, data: null, error: error };
  }
};
