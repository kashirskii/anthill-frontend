import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import { Profile } from "@/pages/profile";
import { AuthGuard } from "@/app/guards";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthPage />} />

        <Route element={<AuthGuard />}>
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
