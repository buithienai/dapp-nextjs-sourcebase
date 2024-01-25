/** @type {import('next').NextConfig} */
const path = require('path');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'public')]
	}
};

module.exports = {
	...nextConfig,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack']
		});

		config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
		return config;
	}
};
