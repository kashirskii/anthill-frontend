import { z } from "zod";

export const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  })
  .strict();

export type LoginFields = z.infer<typeof schema>;
