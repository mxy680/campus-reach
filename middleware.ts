import { auth } from "@/auth"

const PUBLIC_FILE = /\.(.*)$/;

export default auth((req) => {
    const { pathname } = req.nextUrl;

    // Allow requests for Next.js internals and static files
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/static") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/favicon.ico") ||
        pathname.startsWith("/logo") ||
        PUBLIC_FILE.test(pathname)
    ) {
        return;
    }

    // Redirect authenticated users away from /auth
    if (pathname.startsWith("/auth") && req.auth) {
        const newUrl = new URL("/dashboard", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Allow unauthenticated users to access /auth
    if (pathname.startsWith("/auth")) {
        return;
    }

    // Redirect unauthenticated users to /auth
    if (!req.auth) {
        const newUrl = new URL("/auth/signup", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
});