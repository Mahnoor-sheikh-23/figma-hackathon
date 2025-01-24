import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const adminToken = req.cookies.get("adminToken")?.value;

  // Allow access to /admin/login without token
  if (req.nextUrl.pathname === "/admin/login" && adminToken) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  // If accessing other /admin routes without a token, redirect to /admin/login
  if (req.nextUrl.pathname.startsWith("/studio") && !adminToken) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  } else if (req.nextUrl.pathname.startsWith("/viewOrders") && !adminToken) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  } else if (req.nextUrl.pathname.startsWith("/admin/dashboard") && !adminToken) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  } else if (pathname.startsWith("/sign-in")) {
    return NextResponse.next();
  } else if (pathname.startsWith("/sign-up")) {
    return NextResponse.next();
}

  return NextResponse.next();
}

// Apply middleware to `/admin` routes only
export const config = {
  matcher: [
    "/another-protected-route/:path*",
    "/protected-route/:path*",
    "/admin/dashboard",
    "/viewOrders",
    "/studio/:path*",
    "/sign-in/:path*", // Protect all `/admin` routes
    "/sign-up/:path*"], // Protect all `/admin` routes
};
