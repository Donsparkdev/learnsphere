import { useContext } from "react";
import { AuthContext } from "../features/auth/AuthContext";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
