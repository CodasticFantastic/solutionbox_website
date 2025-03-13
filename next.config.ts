import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:
      process.env.NODE_ENV !== "production"
        ? [
            {
              protocol: "http",
              hostname: "localhost",
              port: "3000",
              pathname: "/api/files/**",
              search: "",
            },
          ]
        : [
            {
              protocol: "https",
              hostname: "solutionbox.pl",
              port: "",
              pathname: "/api/files/**",
              search: "",
            },
            {
              protocol: "https",
              hostname: "nowe.solutionbox.pl",
              port: "",
              pathname: "/api/files/**",
              search: "",
            },
          ],
  },
};

export default nextConfig;
