import Head from "next/head";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <nav></nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
