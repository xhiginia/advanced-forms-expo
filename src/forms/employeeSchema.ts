import * as Yup from "yup";

export const employeeSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),

  employeeId: Yup.string()
    .min(4, "Employee ID must be at least 4 characters")
    .required("Employee ID is required"),

  position: Yup.string().required("Position is required"),
});
