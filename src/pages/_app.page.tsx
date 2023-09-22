/* eslint-disable react/no-unknown-property */
import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import { globalStyles } from "@/styles/global";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";

const nunito = Nunito({
  subsets: ["latin"],
});

globalStyles();

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "pt_BR",
            url: "https://www.url.ie/",
            siteName: "Bookwise",
          }}
        />
        <div>
          <style jsx global>{`
            html {
              font-family: ${nunito.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </QueryClientProvider>
  );
}
