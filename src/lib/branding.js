const BRANDING = {
  projectName: "Token Ocean",

  superUserName: "tokenocean",

  urls: {
    base: "market.tokenocean.io",
    www: "www.market.tokenocean.io",
    protocol: "https://market.tokenocean.io",
    external: {
      twitter: "https://twitter.com/tokenocean",
      telegram: "https://t.me/tokenocean",
      blog: "https://blog.tokenocean.io/",
      facebook: "https://facebook.com/tokenocean",
      instagram: "https://www.instagram.com/tokenocean/",
      discord: "",
    },
  },

  meta: {
    title: "Token Ocean",
    keywords: "Bitcoin Liquid NFT Art",
    description:
      "Upload, collect, and transact rare digital art on the Liquid Network",
    image: "https://market.tokenocean.io/splash.png",
    url: "https://market.tokenocean.io/",

    twitter: {
      card: "summary_large_image",
      creator: "@tokenocean",
      site: "@tokenocean",
    },

    artwork: (art) => ({
      title: `Token Ocean - ${art.title}`,
      image: `/api/ipfs/${art.filename}`,
      url: `https://market.tokenocean.io/a/${art.slug}`,
    }),
  },

  emails: {
    support: "support@tokenocean.com",
  },
};

export default BRANDING;
