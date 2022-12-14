/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true}}]
    }) 
    return config
  },
  images: {
      // remotePatterns: [
      //   {
      //     protocol: 'https',
      //     hostname: 'example.com',
      //     port: '',
      //     pathname: '/account123/**',
      //   },
      // ],
      dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  
}

module.exports = nextConfig
