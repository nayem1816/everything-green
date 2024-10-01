/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "via.placeholder.com" },
    ],

    domains: ["localhost", "via.placeholder.com"],
  },
};

export default nextConfig;
