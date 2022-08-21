export function getImageUrl(
  type: "user" | "article" | "banner",
  url: string = "default.webp"
) {
  if (type === "banner") {
    type = "article";
    url = url.replace(".webp", "_banner.webp");
  }
  return `${
    import.meta.env.VITE_SERVER_URL
  }/${type}/${url}?prefix=${Math.random()}`;
}
