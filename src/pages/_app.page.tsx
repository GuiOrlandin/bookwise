/* eslint-disable react/no-unknown-property */
import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import { globalStyles } from "@/styles/global";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}
