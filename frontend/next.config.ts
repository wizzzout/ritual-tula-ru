import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	//output: 'export', // Static Output
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
}

export default nextConfig
