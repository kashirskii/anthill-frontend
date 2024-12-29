import { z } from "zod";

export const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 18 characters long." })
    .max(20, {
      message: "Password must be no more than 20 characters long.",
    }),
  name: z
    .string()
    .min(2, { message: "User name must be at least 2 characters long." })
    .max(18, { message: "User name must be no more than 18 characters long." })
    .regex(/^[a-zA-Z]+$/, "User name must contain only letters."),
}).strict();

export type RegistrationFields = z.infer<typeof schema>;