import { NextResponse } from 'next/server';

// Statistik global
let visitorCount = 0;
const deviceCounts: Record<string, number> = {
  mobile: 0,
  tablet: 0,
  desktop: 0,
  other: 0,
};

// Handler untuk POST
export async function POST(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /Mobile|Android|iP(hone|od)/i.test(userAgent);
  const isTablet = /Tablet|iPad/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  visitorCount += 1;

  if (isMobile) deviceCounts.mobile += 1;
  else if (isTablet) deviceCounts.tablet += 1;
  else if (isDesktop) deviceCounts.desktop += 1;
  else deviceCounts.other += 1;

  return NextResponse.json({ message: 'Visitor count updated!' });
}

// Handler untuk GET
export async function GET() {
  return NextResponse.json({
    visitorCount,
    deviceCounts,
  });
}
