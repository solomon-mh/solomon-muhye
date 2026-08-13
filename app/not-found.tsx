import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="w-5/6 lg:w-1/2 mx-auto py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-green-600 dark:text-green-400 hover:underline"
      >
        ← Back to Solomon Muhye&apos;s portfolio
      </Link>
    </main>
  );
}
