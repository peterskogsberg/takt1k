import Script from "next/script";
import type { Script as ScriptType } from "./types";

type ThirdPartyScriptsProps = {
  scripts: Readonly<ScriptType[]>;
};

const ThirdPartyScripts: React.FC<ThirdPartyScriptsProps> = ({ scripts }) => (
  <>
    {scripts.map(({ src, sha256 }) => (
      <Script
        key={src}
        src={src}
        integrity={sha256 ? `sha256-${sha256}` : undefined}
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
    ))}
  </>
);

export { ThirdPartyScripts };
