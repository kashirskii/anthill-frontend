import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginFields, schema } from "../model/schema";
import { LoginTitle } from "./title";

import { Button, ErrorMessage, Input, Label } from "@ui";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { login } from "@/entities/user/api/login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    dispatch(login(data));
    return navigate("/profile");
  };

  return (
    <form className="max-w-[350px] p-4" onSubmit={handleSubmit(onSubmit)}>
      <LoginTitle />

      <div className="flex flex-col w-full gap-3 mb-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            placeholder="alex@example.com"
            {...register("email")}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="tgVkNC8Yhr"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>
      </div>

      <Button disabled={isSubmitting} className="w-full mb-1.5">
        Login
      </Button>
    </form>
  );
};

export { LoginForm };
