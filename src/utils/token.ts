export const getToken = () => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export const setToken = (token: string) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("token", token);
  }
};

export const clearToken = () => {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem("token");
  }
};
