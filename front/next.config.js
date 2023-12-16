/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    cryptumApiKey: process.env.CRYPTUM_API_KEY,
    walletProtocol: process.env.WALLET_PROTOCOL,
    walletPrivateKey: process.env.WALLET_PRIVATE_KEY,
    walletPublicKey: process.env.WALLET_PUBLIC_KEY,
    walletAddress: process.env.WALLET_ADDRESS,
    walletXpub: process.env.WALLET_XPUB,
  }
}

module.exports = nextConfig
