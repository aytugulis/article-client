export const Endpoint = {
  test: "test",
  testById: (id: string) => `test/${id}`,

  register: "auth/register",
  login: "auth/login",
  updateUser: "auth/edit",

  getTopAuthors: "user/get-top-authors",
  getOneUser: (id: string) => `user/${id}`,

  article: "article",
  getArticle: (id: string) => `article/${id}`,
};
