export const emailRegex = /^\S+@\S+\.\S+$/;

export const removeHtmlTags = (text: string) =>
  text.replace(/<\/?[^>]+(>|$)/g, "");

export const setContentLength = (text: string, limit: number) =>
  text.length > limit ? `${text.substring(0, limit)}...` : text;
