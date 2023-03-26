import packageJSON from "../package.json";

const Footer: React.FunctionComponent = () => (
  <footer
    style={{
      width: "100%",
      height: "100px",
      borderTop: "1px solid #eaeaea",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {`${packageJSON.name} - ${packageJSON.version}`}
  </footer>
);

export { Footer };
