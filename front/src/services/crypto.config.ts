import CryptumSDK from 'cryptum-sdk'

const sdk = new CryptumSDK({
  environment: 'testnet', // 'testnet' or 'development', 'mainnet' or 'production'
  apiKey: process.env.cryptumApiKey!,
})

export const createToken = async (wallet: any) => {
  try {
    console.log('wallet');

    const { hash } = await sdk.token.create({
      wallet,
      name: 'dumbo_token',
      symbol: 'dum',
      decimals: 18,
      amount: '1000000',
      protocol: wallet.protocol
    })

    console.log(hash)
    return hash
  } catch (error) {
    console.log(error);

  }

}

export default sdk