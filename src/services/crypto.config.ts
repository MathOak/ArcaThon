import CryptumSDK from 'cryptum-sdk'

const sdk = new CryptumSDK({
  environment: 'testnet', // 'testnet' or 'development', 'mainnet' or 'production'
  apiKey: process.env.cryptumApiKey!,
})

export default sdk