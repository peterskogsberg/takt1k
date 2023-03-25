import ErrorBoundary from "@components/base/ErrorBoundary";
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
      <Component {...pageProps} err={err} />
    </ErrorBoundary>
  </>
);

export default Application;
