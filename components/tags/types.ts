type Script = {
  src: string;
  async?: boolean;
  sha256?: string;
};

type Stylesheet = {
  src: string;
};

export type { Script, Stylesheet };
