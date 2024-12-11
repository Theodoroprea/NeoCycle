import { AppProps } from "next/app";
import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CartProvider from "@/context/cartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </CartProvider>
    </>
  );
}
