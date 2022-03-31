module.exports = {
  apps: [
    {
      name: "tokenocean",
      watch: ["src"],
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
