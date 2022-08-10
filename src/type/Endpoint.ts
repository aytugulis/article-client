export const Endpoint = {
  register: "auth/register",
  login: "auth/login",
  updateUser: "auth/edit",

  getTopAuthors: "user/get-top-authors",
  getOneUser: (id: string) => `user/${id}`,

  article: "article",
  getArticle: (id: string) => `article/${id}`,
  deleteArticle: (id: string) => `article/${id}`,
  updateArticle: (id: string) => `article/${id}`,
  getBannerArticles: "article/get-banner-articles",
};
