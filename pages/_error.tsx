import type { NextPage } from "next";
import type { ErrorProps } from "next/error";
import Error from "next/error";

const MyError: NextPage<ErrorProps> = ({ statusCode }) => {
  return <Error statusCode={statusCode} />;
};
export default MyError;
