/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: builds to a plain HTML/CSS/JS `out/` folder that any
  // host can serve — no Node.js runtime required. No API routes or server
  // actions are used on this site, so nothing is lost by exporting.
  output: "export",
  images: {
    // Next's built-in image optimizer needs a live server (or Vercel).
    // On static hosting there's no server to run it, so images are served
    // as-is instead of resized/converted on the fly.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
export default nextConfig;
