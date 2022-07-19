import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const registerSchema = yup.object().shape({
  name: yup.string().max(30).required(),
  email: yup.string().email().required(),
  description: yup.string().max(50).required(),
  password: yup.string().min(8).required(),
  file: yup.mixed(),
});

export const editUserSchema = yup.object().shape({
  name: yup.string().max(30).required(),
  email: yup.string().email().required(),
  description: yup.string().max(50).required(),
  file: yup.mixed(),
});
