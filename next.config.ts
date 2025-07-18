import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = "drscanprofile"; // your repo name

const nextConfig: NextConfig = {
  // output: "export",
  images: { unoptimized: true },
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
};

export default nextConfig;
