import { useRouter } from "next/router";
import Format from "@/layout/Format";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const noFormat = ["/"];
  // return
  return (
    <div>
      {noFormat.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Format Component={Component} pageProps={pageProps} />
      )}
    </div>
  );
}
