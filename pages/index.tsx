import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { MouseEventHandler } from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { OrderContext } from "../Store/order-context";

export default function Home() {
  const { currentStep: step } = useContext(OrderContext);

  const stepContent = () => {
    switch (step) {
      case 1:
      // return <AddProducts />;
      case 2:
      //   return <ShippingInfo />;
      case 3:
      //  return <OrderSummary />;
      default:
        console.log(step);
    }
  };

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="SmartShopper | Shop on Amazon using Crypto"
        />
        <meta
          property="og:description"
          content="Smartshopper is the first decentralized platform that allows users to buy on Amazon by just using their DeFi Wallet, like Metamask or TrustWallet."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://app.smartshopperpay.com/" />
        <meta property="og:site_name" content="SmartShopper" />

        <link rel="canonical" href="https://app.smartshopperpay.com/" />

        <meta property="og:image" content="/assets/meta/index.png" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:image:width" content="1000" />

        <meta property="og:image" content="/assets/meta/indexmobile.png" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:width" content="200" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@smartshopper" />
        <meta
          name="twitter:title"
          content="SmartShopper | Shop on Amazon using Crypto"
        />
        <meta
          name="twitter:description"
          content="Smartshopper is the first decentralized platform that allows users to buy on Amazon by just using their DeFi Wallet, like Metamask or TrustWallet."
        />
        <meta name="twitter:creator" content="@deforceagency" />
        <meta name="twitter:image" content="/assets/meta/index.png" />

        <title>SmartShopper | Shop on Amazon using Crypto</title>
        <meta
          name="description"
          content="Smartshopper is the first decentralized platform that allows users to buy on Amazon by just using their DeFi Wallet, like Metamask or TrustWallet."
        />
      </Head>
      <main></main>
    </>
  );
}
