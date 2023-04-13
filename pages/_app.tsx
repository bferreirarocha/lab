import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  Theme,
} from "@rainbow-me/rainbowkit";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@rainbow-me/rainbowkit/styles.css";

import {
  RainbowKitSiweNextAuthProvider,
  GetSiweMessageOptions,
} from "@rainbow-me/rainbowkit-siwe-next-auth";
import { SessionProvider } from "next-auth/react";
import OrderContextProvider from "../Store/order-context";

import { polygon } from "@wagmi/chains";
import merge from "lodash.merge";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const CHAINS = [polygon];

const { provider, chains } = configureChains(CHAINS, [
  alchemyProvider({ apiKey: alchemyId! }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "SmartShopper",
  chains,
});

const client = createClient({
  autoConnect: true,
  provider,
  connectors,
});

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  domain: window.location.host,
  statement: "Sign in with your Wallet.",
  uri: window.location.origin,
  version: "1",
});

const myTheme = merge(lightTheme(), {
  colors: {
    accentColor: "#ff9900",
  },
} as Theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider
          getSiweMessageOptions={getSiweMessageOptions}
        >
          <RainbowKitProvider chains={chains} theme={myTheme}>
            <OrderContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </OrderContextProvider>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}
