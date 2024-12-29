import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegistrationFields, schema } from "../model/schema";
import { RegistrationTitle } from "./title";

import { Button, ErrorMessage, Input, Label } from "@ui";
import { registration } from "@/entities/user/api/registration";
import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegistrationFields> = async (data) => {
    dispatch(registration(data));
    return navigate("/profile");
  };

  return (
    <form className="max-w-[350px] p-4" onSubmit={handleSubmit(onSubmit)}>
      <RegistrationTitle />

      <div className="flex flex-col w-full gap-3 mb-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
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
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Alex"
            {...register("name")}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>
      </div>

      <Button className="w-full">Sign In with Email</Button>
    </form>
  );
};

export { RegistrationForm };
