
module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    disableStaticImages: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
