"use client";
import React from "react";
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] px-4">
      {/* Welcome Banner */}
      <section className="w-full max-w-3xl text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0ea5e9] mb-4">Welcome to Jobie</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Empowering your career journey. Discover top jobs, connect with employers, and unlock new opportunities.</p>
        <div className="flex justify-center gap-4 mb-8">
          <Link href="/login"><button className="bg-[#0ea5e9] text-white px-6 py-2 rounded-full font-semibold shadow">Login</button></Link>
          <Link href="/register"><button className="bg-white text-[#0ea5e9] border border-[#0ea5e9] px-6 py-2 rounded-full font-semibold shadow">Sign Up</button></Link>
        </div>
      </section>

      {/* Highlighted Jobs Carousel (Placeholder) */}
      <section className="w-full max-w-4xl mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-[#0ea5e9] mb-4">Highlighted Jobs</h2>
          <div className="w-full h-40 flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-[#e0f2fe] rounded-xl">
            [Dynamic Jobs Carousel Coming Soon]
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-[#0ea5e9]">2,500+</span>
          <span className="text-gray-600 mt-2">Jobs Posted</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-[#0ea5e9]">1,200+</span>
          <span className="text-gray-600 mt-2">Active Users</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-[#0ea5e9]">800+</span>
          <span className="text-gray-600 mt-2">Success Stories</span>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="w-full max-w-2xl flex flex-col md:flex-row justify-center gap-6 mb-16">
        <Link href="/jobs"><button className="bg-[#0ea5e9] text-white px-8 py-3 rounded-full font-semibold shadow w-full md:w-auto">Explore Jobs</button></Link>
        <Link href="/dashboard"><button className="bg-white text-[#0ea5e9] border border-[#0ea5e9] px-8 py-3 rounded-full font-semibold shadow w-full md:w-auto">Post a Job</button></Link>
      </section>

      {/* About Link */}
      <footer className="w-full text-center text-gray-500 text-sm pb-6">
        <Link href="/about">Learn more about Jobie</Link>
      </footer>
    </main>
  );
}
