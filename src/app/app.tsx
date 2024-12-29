import { Providers } from "./providers/providers";
import { AppRouter } from "./routers/app-router";

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
