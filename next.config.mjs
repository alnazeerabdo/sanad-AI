/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to export static files

  // UNCOMMENT the line below and change 'sanad-AI' to your actual GitHub repository name if it's not hosted at the root domain!
  basePath: '/sanad-AI',

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // This is required for Next.js images on GitHub Pages
  },
}

export default nextConfig
