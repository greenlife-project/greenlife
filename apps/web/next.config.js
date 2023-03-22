/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: 'standalone',
    transpilePackages: ["ui"],
}


module.exports = nextConfig
