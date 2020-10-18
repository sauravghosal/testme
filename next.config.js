module.exports = {
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/",
        permanent: false,
      },
      { source: "/history", destination: "/", permanent: false },
    ];
  },
};
