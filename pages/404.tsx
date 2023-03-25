import type { ErrorProps } from "next/error";
import Error from "next/error";

const NotFound: React.FunctionComponent<ErrorProps> = () => (
  <Error statusCode={404} />
);

export default NotFound;
