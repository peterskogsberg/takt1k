const config = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    experimental: {
      esmExternals: "loose",
    },
    webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
    },
  };
  return nextConfig;
};

export default config;
