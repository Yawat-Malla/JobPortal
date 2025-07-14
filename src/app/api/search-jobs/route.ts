import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  // Optionally, parse query params for filtering/searching
  // const { searchParams } = req.nextUrl;
  // const keyword = searchParams.get('q');

  // Fetch jobs from the database
  const jobs = await prisma.job.findMany({
    where: {
      isActive: true,
      // Optionally add search/filter logic here
    },
    include: {
      company: true,
    },
    orderBy: { postedAt: "desc" },
    take: 50, // limit for demo
  });

  // Map jobs to frontend format
  const jobList = jobs.map(job => ({
    company: job.company?.name || "",
    title: job.title,
    salary: job.salary || "",
    description: job.description,
    type: job.jobType,
    location: job.location || "-",
    icon: "person",
    color: "#0ea5e9", // Optionally, use a color based on job/company/type
  }));

  return NextResponse.json({ jobs: jobList });
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
