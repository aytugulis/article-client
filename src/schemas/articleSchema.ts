import * as yup from "yup";
import { removeHtmlTags } from "../utils/format";

const minContentLength = 20;
const maxContentLength = 1000;
export const articleSchema = yup.object().shape({
  category: yup
    .string()
    .oneOf(["Frontend", "Backend", "Fullstack", "Devops", "AI", "Data"])
    .required(),
  content: yup
    .string()
    .test(
      "length",
      `content must be at least ${minContentLength} characters`,
      (val) => {
        if (!val) return false;
        const contentWithoutHtmlTags = removeHtmlTags(val);
        return contentWithoutHtmlTags.length >= minContentLength;
      }
    )
    .test(
      "length",
      `content must be at most ${maxContentLength} characters`,
      (val) => {
        if (!val) return false;
        const contentWithoutHtmlTags = removeHtmlTags(val);
        return contentWithoutHtmlTags.length <= maxContentLength;
      }
    )
    .required(),
  header: yup.string().min(3).max(20).required(),
  file: yup.mixed(),
});
