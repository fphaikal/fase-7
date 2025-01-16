import type { NextApiRequest, NextApiResponse } from 'next';

let visitorCount = 0;
const deviceCounts: Record<string, number> = {
  mobile: 0,
  tablet: 0,
  desktop: 0,
  other: 0,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Update visitor count and device count
    visitorCount += 1;

    const userAgent = req.headers['user-agent'] || '';
    const isMobile = /Mobile|Android|iP(hone|od)/i.test(userAgent);
    const isTablet = /Tablet|iPad/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;

    if (isMobile) deviceCounts.mobile += 1;
    else if (isTablet) deviceCounts.tablet += 1;
    else if (isDesktop) deviceCounts.desktop += 1;
    else deviceCounts.other += 1;

    res.status(200).json({ message: 'Visitor count updated!' });
  } else if (req.method === 'GET') {
    // Return visitor statistics
    res.status(200).json({
      visitorCount,
      deviceCounts,
    });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
