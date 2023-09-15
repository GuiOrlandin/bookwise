/* eslint-disable react/no-unknown-property */
import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import { globalStyles } from "@/styles/global";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

const nunito = Nunito({
  subsets: ["latin"],
});

globalStyles();

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <div>
          <style jsx global>{`
            html {
              font-family: ${nunito.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </SessionProvider>
  );
}
