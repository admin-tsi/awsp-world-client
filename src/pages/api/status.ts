import { NextApiResponse, NextApiRequest } from 'next';
import Mux from '@mux/mux-node';

if (!process.env.MUX_TOKEN_ID || !process.env.MUX_TOKEN_SECRET) {
  throw new Error('MUX_TOKEN_ID and MUX_TOKEN_SECRET must be set');
}

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { assetId } = req.query;

  if (!assetId || typeof assetId !== 'string') {
    return res
      .status(400)
      .json({ error: 'Asset ID is required and must be a string' });
  }

  try {
    const asset = await mux.video.assets.retrieve(assetId);

    return res.status(200).json({ asset });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
