import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { Label } from "@ui/label";

const RegistrationForm = () => {
  return (
    <form className="max-w-[350px] p-4">
      <div className="flex flex-col items-center mb-6 text-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Create an account
        </h3>
        <p className="text-neutral-500 text-center text-sm px-2">
          Enter your email below to create your account
        </p>
      </div>

      <div className="w-full flex flex-col gap-3 mb-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="alex@example.com" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="tgVkNC8Yhr" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Alex" />
        </div>
      </div>

      <Button className="w-full">Sign In with Email</Button>
    </form>
  );
};

export { RegistrationForm };
