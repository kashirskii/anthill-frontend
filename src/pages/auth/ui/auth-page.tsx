import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { LoginForm } from "@/features/login";
import { RegistrationForm } from "@/features/registration";

import { Button } from "@ui";
import { useAppSelector } from "@/app/stores";

export function AuthPage() {
  const [authMode, setAuthMode] = useState<"login" | "registration">(
    "registration"
  );
  const { isAuthorized, id } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isAuthorized) {
      navigate(`/profile/${id}`);
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
