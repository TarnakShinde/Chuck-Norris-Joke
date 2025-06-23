/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.chucknorris.io",
                port: "",
                pathname: "/img/**",
            },
        ],
    },
};

export default nextConfig;
