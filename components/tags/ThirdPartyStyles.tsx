import type { Stylesheet } from "./types";

type ThirdPartyStylesProps = {
  styles: Readonly<Stylesheet[]>;
};

const ThirdPartyStyles: React.FC<ThirdPartyStylesProps> = ({ styles }) => (
  <>
    {styles.map(({ src }) => (
      <link rel="stylesheet" href={src} />
    ))}
  </>
);

export { ThirdPartyStyles };
