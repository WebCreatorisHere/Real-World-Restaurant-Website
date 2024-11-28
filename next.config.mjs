/** @type {import('next').NextConfig} */
const nextConfig = {
compiler: {
  styledComponents: {
    // Enabled by default.
    cssProp: true,
  },
  
},
reactStrictMode: false,
experimental: {
  missingSuspenseWithCSRBailout: false, // Disable the option
},
};

export default nextConfig;
