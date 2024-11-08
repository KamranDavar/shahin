//imports and user all providers in this file
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import StoreProvider from "./StoreProvider";
// import UiProvider from "./UiProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>
      {children}
     </AppRouterCacheProvider>
    </StoreProvider>
  );
};
