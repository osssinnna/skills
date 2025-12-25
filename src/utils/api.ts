import type { Category, Subcategory, User } from "./types";

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

type TServerResponse<T> = {
  succes: boolean;
} & T;

type TCategoriesResponse = TServerResponse<{
  categories: Category[];
  subcategories: Subcategory[];
}>;

export const getCategories = () =>
  fetch("https://empty032.github.io/my-json-hosting/categories.json")
    .then((res) => checkResponse<TCategoriesResponse>(res))
    .then((data) => {
      if (data?.succes) return data;
      return Promise.reject(data);
    });

type TUsersResponse = TServerResponse<{
  users: User[];
}>;

export const getUsers = () =>
  fetch("https://empty032.github.io/my-json-hosting/users.json")
    .then((res) => checkResponse<TUsersResponse>(res))
    .then((data) => {
      if (data?.succes) return data;
      return Promise.reject(data);
    });
