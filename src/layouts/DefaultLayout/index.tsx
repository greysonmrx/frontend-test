"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";

import AppProvider from "@/hooks";

import GlobalStyle from "@/styles/global";
import DefaultTheme from "@/styles/themes/default";

import RickAndMortyLogo from "@/assets/images/logo.png";

import * as S from "./styles";

interface DefaultLayoutProps extends React.PropsWithChildren {}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const plusJakartaSans = PlusJakartaSans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
  subsets: ["latin"],
});

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <html lang="pt-BR">
      <body className={plusJakartaSans.className}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={DefaultTheme}>
            <AppProvider>
              <S.Header>
                <nav>
                  <Image alt="Rick and Morty" src={RickAndMortyLogo} />
                  <ul>
                    <S.MenuItem isActive={pathname.startsWith("/characters")}>
                      <Link href="/characters">Characters</Link>
                    </S.MenuItem>
                    <S.MenuItem isActive={pathname.startsWith("/locations")}>
                      <Link href="/locations">Locations</Link>
                    </S.MenuItem>
                    <S.MenuItem isActive={pathname.startsWith("/episodes")}>
                      <Link href="/episodes">Episodes</Link>
                    </S.MenuItem>
                  </ul>
                </nav>
              </S.Header>
              <S.Container>
                <S.ScrollArea>
                  <S.Content>{children}</S.Content>
                </S.ScrollArea>
              </S.Container>
              <GlobalStyle />
            </AppProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default DefaultLayout;
