import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
        {
           hostname: "encrypted-tbn0.gstatic.com",
           protocol: "https",
           pathname: "/**",
           port: "", 
        },
         {
           hostname: "images.pexels.com",
           protocol: "https",
           pathname: "/**",
           port: "", 
        },
        {
          hostname: "lh3.googleusercontent.com",
          protocol: "https",
          pathname: "/**",
          port: "",
        }
      ]
   }
};

export default nextConfig;
