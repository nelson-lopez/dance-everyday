import * as Yup from "yup";

export const SearchSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required")
});
