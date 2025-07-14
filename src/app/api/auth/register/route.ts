import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function GET() {
  return NextResponse.json({ message: "GET request received" });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, password, firstName, lastName, username } = data;
    if (!email || !password || !firstName || !lastName || !username) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }
    const hashed = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        firstName,
        lastName,
        username,
        // Add other fields as needed
      },
    });
    return NextResponse.json({ message: "User registered", user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, username: user.username } });
  } catch {
    return NextResponse.json({ error: "Invalid JSON or server error" }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    return NextResponse.json({ message: "PUT received", data });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

export async function DELETE() {
  return NextResponse.json({ message: "DELETE received" });
}
