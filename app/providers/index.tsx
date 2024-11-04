//imports and user all providers in this file
import StoreProvider from "./StoreProvider";
// import UiProvider from "./UiProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      {/* <UiProvider> */}
      {children}
      {/* </UiProvider> */}
    </StoreProvider>
  );
};
