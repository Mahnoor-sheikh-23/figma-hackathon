import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@example.com" && password === "admin123") {
    const token = "secure_token"; // Replace with your token logic
    const response = NextResponse.json({ message: "Login successful", token }, { status: 200 });
    response.cookies.set("adminToken", token, { httpOnly: true, secure: true, path: "/", maxAge: 60 * 60 }); // 1-hour expiry
    return response;
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
