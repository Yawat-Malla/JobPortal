import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const companyColors = ["#0ea5e9", "#a78bfa", "#f59e42", "#22c55e", "#6366f1"];

export async function GET() {
  // For demo, get the first user (or use session in real app)
  const user = await prisma.user.findFirst();
  if (!user) return NextResponse.json({ applications: [] });

  const applications = await prisma.application.findMany({
    where: { userId: user.id },
    include: {
      job: true,
      company: true,
    },
    orderBy: { appliedAt: "desc" },
    take: 50,
  });

  const mapped = applications.map((app, idx) => ({
    id: app.id,
    date: app.appliedAt.toLocaleString(),
    company: app.company?.name || app.job?.companyId || "",
    companyDesc: app.company?.description || "",
    companyColor: companyColors[idx % companyColors.length],
    type: app.job?.jobType || "",
    position: app.job?.title || "",
    contact: ["call", "email"],
    status: app.status,
  }));

  return NextResponse.json({ applications: mapped });
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
