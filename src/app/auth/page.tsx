"use client";

import { RegistrationForm } from "@/modules/registration-form";
import { LoginForm } from "@/modules/login-form";
import { Button } from "@ui/button";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [authMode, setAuthMode] = useState<"login" | "registration">(
    "registration"
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col overflow-hidden">
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
