import { z } from "zod";

export const userSchema = z.object({
  fist_name: z.string().min(2, "Fitst name must be at least 2 characters"),
  middle_name: z.string().optional(),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email(),
});

export const createUserSchema = z
  .object({
    first_name: z
      .string({ required_error: "first name is required" })
      .min(2, "Fitst name must be at least 2 characters"),
    middle_name: z.string().optional(),
    last_name: z
      .string({ required_error: "last name is required" })
      .min(2, "Last name must be at least 2 characters"),
    email: z.string({ required_error: "email is required" }).email(),
    password: z.string({ required_error: "password is required" }),
    confirm_password: z.string(),
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        path: ["confirm_password"],
        code: "custom",
        message: "Passwords do not match",
      });
    }
  });

export const authUserSchema = z.object({
  email: z.string({ required_error: "Email is required." }).email(),
  password: z.string({ required_error: "Password is required." }),
});

export type User = z.infer<typeof userSchema>;
export type TAuthUser = z.infer<typeof authUserSchema>;
export type TCreateUser = z.infer<typeof createUserSchema>;
