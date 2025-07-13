'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-white relative overflow-hidden">
      {/* Subtle cloud effect (optional, can use SVG or blurred divs) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute left-1/4 top-10 w-96 h-32 bg-white/40 rounded-full blur-2xl" />
        <div className="absolute right-1/4 bottom-10 w-96 h-32 bg-[#e0f2fe]/60 rounded-full blur-2xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center border border-[#e0f2fe]"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#e0f2fe] to-[#0ea5e9]/30 mb-4 shadow"
        >
          <span className="material-icons text-3xl text-[#0ea5e9]">person_add</span>
        </motion.div>
        <h1 className="text-2xl font-bold text-[#0ea5e9] mb-2">Create your account</h1>
        <p className="text-gray-500 text-center mb-6 text-sm">Sign up to land your first freelancing gig! For free</p>
        <form className="w-full flex flex-col gap-4">
          <motion.input
            whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #0ea5e9" }}
            type="text"
            placeholder="Name"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none bg-white/70 transition-all text-gray-800"
          />
          <motion.input
            whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #0ea5e9" }}
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none bg-white/70 transition-all text-gray-800"
          />
          <motion.input
            whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #0ea5e9" }}
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none bg-white/70 transition-all text-gray-800"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, backgroundColor: "#38bdf8" }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#0ea5e9] text-white px-6 py-3 rounded-lg font-semibold shadow mt-2 text-lg transition-all"
          >
            Get Started
          </motion.button>
        </form>
        {/* <div className="flex items-center w-full my-4">
          <div className="flex-1 h-px bg-[#e0f2fe]" />
          <span className="mx-2 text-xs text-gray-400">Or sign up with</span>
          <div className="flex-1 h-px bg-[#e0f2fe]" />
        </div>
        <div className="flex gap-4 w-full justify-center">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-white border border-gray-200 rounded-full p-3 shadow hover:bg-[#e0f2fe] transition"><span className="material-icons text-[#ea4335]">g_translate</span></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-white border border-gray-200 rounded-full p-3 shadow hover:bg-[#e0f2fe] transition"><span className="material-icons text-[#1877f3]">facebook</span></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="bg-white border border-gray-200 rounded-full p-3 shadow hover:bg-[#e0f2fe] transition"><span className="material-icons text-black">apple</span></motion.button>
        </div> */}
        <p className="mt-6 text-gray-600 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-[#0ea5e9] font-semibold hover:underline">Login</Link>
        </p>
      </motion.div>
      {/* Logo top left */}
      <div className="absolute top-6 left-8 flex items-center gap-2 z-10">
        <span className="bg-white rounded-lg p-2 shadow text-[#0ea5e9] font-bold text-xl">Ebolt</span>
      </div>
    </main>
  );
} 