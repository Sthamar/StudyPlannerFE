import { clearToken, getToken } from "@/utils/token";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
    setChecking(false);
  }, []);

  const logout = () => {
    clearToken();
    setIsLoggedIn(false);
  };

  return { isLoggedIn, checking, logout };
}
