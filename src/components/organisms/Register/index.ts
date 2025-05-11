export const saveInfoToLocal = (
  name: string,
  email: string,
  password: string
) => {
  localStorage.setItem(
    "userInfo",
    JSON.stringify({
      name,
      email,
      password,
    })
  );
};
