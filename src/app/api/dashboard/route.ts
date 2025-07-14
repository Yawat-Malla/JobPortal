import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  // Get user id from session cookie
  const userId = req.cookies.get("session")?.value;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch user statistics
  const stats = await prisma.userStatistics.findUnique({ where: { userId } });
  // Fetch user profile
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      skills: { include: { skill: true } },
    },
  });
  // Fetch recent activities (last 3 applications)
  const activities = await prisma.application.findMany({
    where: { userId },
    orderBy: { appliedAt: "desc" },
    take: 3,
    select: {
      id: true,
      status: true,
      job: { select: { title: true } },
      appliedAt: true,
    },
  });
  // Fetch chart data (applications per week, interviews, rejected)
  // For demo, just count per week for last 10 weeks
  const now = new Date();
  const chartData = [];
  for (let i = 9; i >= 0; i--) {
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay() - i * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    const applications = await prisma.application.count({
      where: {
        userId,
        appliedAt: { gte: weekStart, lte: weekEnd },
      },
    });
    const interviews = await prisma.application.count({
      where: {
        userId,
        appliedAt: { gte: weekStart, lte: weekEnd },
        status: "INTERVIEW_SCHEDULED",
      },
    });
    const rejected = await prisma.application.count({
      where: {
        userId,
        appliedAt: { gte: weekStart, lte: weekEnd },
        status: "REJECTED",
      },
    });
    chartData.push({
      week: `Week ${10 - i}`,
      applicationSent: applications,
      interviews,
      rejected,
    });
  }
  // Fetch recommended jobs (latest 3 active jobs not applied by user)
  const jobs = await prisma.job.findMany({
    where: {
      isActive: true,
      applications: { none: { userId } },
    },
    orderBy: { postedAt: "desc" },
    take: 3,
    include: { company: true },
  });
  // Fetch featured companies (top 5 by job count)
  const companies = await prisma.company.findMany({
    take: 5,
    orderBy: { jobs: { _count: "desc" } },
    include: { jobs: true },
  });

  return NextResponse.json({
    statCards: [
      { icon: "event_note", label: "Interviews Schedule", value: stats?.interviewsScheduled || 0, color: "#0ea5e9", bg: "#e0f2fe" },
      { icon: "send", label: "Application Sent", value: stats?.applicationsSent || 0, color: "#38bdf8", bg: "#e0f2fe" },
      { icon: "person", label: "Profile Viewed", value: stats?.profileViews || 0, color: "#22c55e", bg: "#dcfce7" },
      { icon: "mail", label: "Unread Message", value: stats?.unreadMessages || 0, color: "#84cc16", bg: "#f7fee7" },
    ],
    profile: {
      avatarUrl: user?.avatar,
      name: user ? `${user.firstName} ${user.lastName}` : "",
      role: user?.activeRoleId || "",
      skills: user?.skills.map(s => ({ label: s.skill.name, percent: s.proficiency, color: "#0ea5e9" })) || [],
      activities: activities.map(a => ({ icon: "assignment_turned_in", text: `Your application status: ${a.status} for ${a.job.title}`, time: a.appliedAt.toLocaleString() })),
    },
    chartData,
    jobs: jobs.map(j => ({
      company: j.company?.name || "",
      title: j.title,
      salary: j.salary || "",
      description: j.description,
      type: j.jobType,
      location: j.location || "-",
      color: "#0ea5e9",
    })),
    companies: companies.map(c => ({
      name: c.name,
      vacancies: c.jobs.length,
      color: "#22c55e",
    })),
  });
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
