import ErrorBoundary from "@components/base/ErrorBoundary";
import { TeamProvider } from "@components/context/TeamProvider";
import { ThirdParty } from "@components/tags/ThirdParty";
import "@styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

const Application: NextPage<AppProps & { err: unknown }> = ({
  Component,
  pageProps,
  err,
}) => (
  <>
    <ThirdParty />
    <ErrorBoundary>
      <TeamProvider>
        <Component {...pageProps} err={err} />
      </TeamProvider>
    </ErrorBoundary>
  </>
);

export default Application;
