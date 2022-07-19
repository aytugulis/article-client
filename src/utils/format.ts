export const emailRegex = /^\S+@\S+\.\S+$/;

export const removeHtmlTags = (text: string) =>
  text.replace(/<\/?[^>]+(>|$)/g, "");
