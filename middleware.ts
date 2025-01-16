import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const deviceCounts: Record<string, number> = {
  mobile: 0,
  tablet: 0,
  desktop: 0,
  other: 0,
};

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";
  const isMobile = /Mobile|Android|iP(hone|od)/i.test(userAgent);
  const isTablet = /Tablet|iPad/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  if (isMobile) deviceCounts.mobile += 1;
  else if (isTablet) deviceCounts.tablet += 1;
  else if (isDesktop) deviceCounts.desktop += 1;
  else deviceCounts.other += 1;

  console.log("Device counts:", deviceCounts);

  return NextResponse.next();
}
