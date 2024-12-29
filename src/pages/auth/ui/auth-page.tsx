import { useEffect, useRef, useState } from "react";

import { RegistrationForm } from "@/features/registration/ui/form";
import { LoginForm } from "@/features/login/ui/form";

import { Button } from "@ui";
import { useAppSelector } from "@/app/store";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [authMode, setAuthMode] = useState<"login" | "registration">(
    "registration"
  );
  const { isAuthorized } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isAuthorized) {
      navigate("/profile");
    }

    isFirstRender.current = false;
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <Button
        onClick={() =>
          setAuthMode(authMode == "registration" ? "login" : "registration")
        }
        variant="ghost"
        className="absolute top-4 right-4"
      >
        Login
      </Button>

      <div
        className={
          isFirstRender.current
            ? ""
            : authMode == "login"
            ? "animate-backOutUp"
            : "animate-backInDown animation-delay-750ms"
        }
      >
        <RegistrationForm />
      </div>
      <div
        className={
          isFirstRender.current
            ? "hidden"
            : authMode == "registration"
            ? "animate-backOutUp"
            : "animate-backInDown animation-delay-750ms"
        }
      >
        <LoginForm />
      </div>
    </main>
  );
}
