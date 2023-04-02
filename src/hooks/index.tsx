import React from "react";

import { FavoritedCharactersProvider } from "./useFavoritedCharacters";

interface AppProviderProps extends React.PropsWithChildren {}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <FavoritedCharactersProvider>{children}</FavoritedCharactersProvider>;
};

export default AppProvider;
