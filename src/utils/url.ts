export function getImageUrl(type: "user" | "article", url?: string) {
  if (!url) url = "default.webp";
  return `${
    import.meta.env.VITE_SERVER_URL
  }/${type}/${url}?prefix=${Math.random()}`;
}
