/* eslint-disable react/no-unknown-property */
import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import { globalStyles } from "@/styles/global";
import { CardBookContextProvider } from "../context/cardBookContext";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CardBookContextProvider>
      <div>
        <style jsx global>{`
          html {
            font-family: ${nunito.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </div>
    </CardBookContextProvider>
  );
}
