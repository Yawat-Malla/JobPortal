import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  // For demo, get the first user (or use session in real app)
  const user = await prisma.user.findFirst();
  if (!user) return NextResponse.json({ statCards: [] });

  const stats = await prisma.userStatistics.findUnique({ where: { userId: user.id } });
  const applicationsSent = stats?.applicationsSent || 0;
  const applicationsAnswered = stats?.applicationsAnswered || 0;
  const interviewed = stats?.interviewsScheduled || 0;
  const hired = stats?.hiredCount || 0;
  const unreadMessages = stats?.unreadMessages || 0;
  const profileViews = stats?.profileViews || 0;

  // For sub, subColor, subText, link, linkText, you can add logic as needed
  const statCards = [
    { label: "Profile Viewed", value: profileViews, icon: "visibility", color: "#22c55e", sub: "+24%", subColor: "#22c55e", subText: "than last month" },
    { label: "Unread Messages", value: unreadMessages, icon: "mail", color: "#6366f1", link: "/messages", linkText: "Go to Message" },
    { label: "Application Sent", value: applicationsSent, icon: "work", color: "#0ea5e9" },
    { label: "App. Answered", value: applicationsAnswered, icon: "reply", color: "#f59e42" },
    { label: "Interviewed", value: interviewed, icon: "event", color: "#38bdf8" },
    { label: "Hired", value: hired, icon: "call", color: "#7c3aed" },
  ];

  return NextResponse.json({ statCards });
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
