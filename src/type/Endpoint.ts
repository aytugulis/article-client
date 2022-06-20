export const Endpoint = {
  test: "test",
  testById: (id: string) => `test/${id}`,
  getArticles: "article",
  getArticle: (id: string) => `article/${id}`,
  getTopAuthors: "user/get-top-authors",
};
