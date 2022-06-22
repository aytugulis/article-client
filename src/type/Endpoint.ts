export const Endpoint = {
  test: "test",
  register: "auth/register",
  login: "auth/login",
  testById: (id: string) => `test/${id}`,
  getArticles: "article",
  getArticle: (id: string) => `article/${id}`,
  getTopAuthors: "user/get-top-authors",
  getOneUser: (id: string) => `user/${id}`,
};
