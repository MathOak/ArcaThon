

import { createToken } from '@/services/crypto.config'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(req.body);
  
  const a = await createToken(req.body.wallet)

  console.log(a);

  res.status(200).json({ message: 'Hello from Next.js!' })
}