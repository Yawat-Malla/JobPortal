import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  return NextResponse.json({ message: "GET request received" });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    return NextResponse.json({ message: "POST received", data });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
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

export async function PATCH(req: Request) {
  try {
    const { userId, roleId } = await req.json();
    if (!userId || !roleId) {
      return NextResponse.json({ error: "Missing userId or roleId" }, { status: 400 });
    }
    // Check if user has the role
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { roles: true },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const hasRole = Array.isArray(user?.roles) && user.roles.some((r: { id: string }) => r.id === roleId);
    if (!hasRole) {
      return NextResponse.json({ error: "User does not have this role" }, { status: 403 });
    }
    // Use relation update syntax
    await prisma.user.update({
      where: { id: userId },
      data: { activeRole: { connect: { id: roleId } } } as unknown as { activeRole: { connect: { id: string } } },
    });
    return NextResponse.json({ message: "Active role updated" });
  } catch {
    return NextResponse.json({ error: "Invalid JSON or server error" }, { status: 400 });
  }
}
