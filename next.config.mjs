/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/my-money-app",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
