import type { NextRequest, NextResponse } from "next/server";
import type { getSession } from "../repository/session-manager/action";

export type ProxyContext = {
  req: NextRequest;
  session: Awaited<ReturnType<typeof getSession>> | null;
};

export type ProxyFunction = (
  context: ProxyContext,
) => Promise<NextResponse | undefined>;
