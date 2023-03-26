import type { Stylesheet } from "./types";

type ThirdPartyStylesProps = {
  styles: Readonly<Stylesheet[]>;
};

const ThirdPartyStyles: React.FC<ThirdPartyStylesProps> = ({ styles }) => (
  <>
    {styles.map(({ src, sha256 }) => (
      <link
        key={src}
        href={src}
        integrity={sha256 ? `sha256-${sha256}` : undefined}
        rel="stylesheet"
        crossOrigin="anonymous"
      />
    ))}
  </>
);

export { ThirdPartyStyles };
