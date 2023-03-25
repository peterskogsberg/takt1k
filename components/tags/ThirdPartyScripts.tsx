import Script from "next/script";
import type { Script as ScriptType } from "./types";

type ThirdPartyScriptsProps = {
  scripts: Readonly<ScriptType[]>;
};

const ThirdPartyScripts: React.FC<ThirdPartyScriptsProps> = ({ scripts }) => (
  <>
    {scripts.map(({ src }) => (
      <Script src={src} strategy="lazyOnload" />
    ))}
  </>
);

export { ThirdPartyScripts };
