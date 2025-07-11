import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#0ea5e9] mb-6">Login to Jobie</h1>
        <form className="w-full flex flex-col gap-4">
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none" />
          <input type="password" placeholder="Password" className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none" />
          <button type="submit" className="bg-[#0ea5e9] text-white px-6 py-3 rounded-lg font-semibold shadow mt-2">Login</button>
        </form>
        <p className="mt-6 text-gray-600 text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-[#0ea5e9] font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </main>
  );
} 