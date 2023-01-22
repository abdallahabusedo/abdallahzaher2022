import "../styles/globals.css";
import type { AppProps } from "next/app";

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () =>
    console.log("DOMContentLoaded")
  );
}
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
