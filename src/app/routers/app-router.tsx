import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "@/pages/auth/ui/auth-page";
import { Profile } from "@/pages/profile/ui/profile";
import { AuthGuard } from "../guards/auth.guard";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthPage />} />

        <Route element={<AuthGuard />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
