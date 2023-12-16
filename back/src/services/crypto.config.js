const CryptumSDK = require('cryptum-sdk')

const sdk = new CryptumSDK({
  environment: 'testnet', // 'testnet' or 'development', 'mainnet' or 'production'
  apiKey: 'P0O58OPOq4qGPapkOrpuM3YkpTE40vBz',
})

exports.createToken = async (wallet) => {
  try {
    console.log(wallet);
    console.log('wallet');

    const { hash } = await sdk.token.create({
      wallet,
      name: 'dumbo_token',
      symbol: 'dum',
      amount: '1000',
      protocol: wallet.protocol,
      testnet: true
    })

    console.log(hash)
    return hash
  } catch (error) {
    console.log(error);

  }

}
