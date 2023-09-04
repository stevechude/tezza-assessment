import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Head from "next/head";

export default function Format({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Travel Manager</title>
      </Head>

      <div className="flex flex-col lg:flex-row h-screen">
        <SideMenu />
        <div className="h-screen lg:w-full flex flex-col">
          <Header />
          <div className="w-full bg-[#F1F1F1] overflow-y-auto">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
