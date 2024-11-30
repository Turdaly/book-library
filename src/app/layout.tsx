// redux/provider.tsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";


interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
