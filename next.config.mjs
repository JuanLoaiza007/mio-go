/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/saldo",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
