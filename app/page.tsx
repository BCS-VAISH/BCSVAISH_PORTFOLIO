'use client';
import Scroll from '@/components/scroll';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HTMLContent from "@/components/count";
import Edu from "@/components/skill";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <main className="min-h-screen font-sans text-gray-800 dark:text-white bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <Scroll />

      {/* Hero Section */}
      <section id="home" className="pt-10 pb-12 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text animate-pulse bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Hey, I'm Vaishnavan
          </h1>
          <h2 className="text-2xl text-yellow-600 dark:text-yellow-400 font-bold">
            Bachelor of Technology in Computer Science and Engineering
          </h2>
          <Link href="/ContactMe" className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-full shadow-lg hover:opacity-90 transition">
            Contact Me <span className="ml-2">📨</span>
          </Link>
        </div>

        <div className="relative w-full h-[400px] bg-gradient-to-tr from-pink-100 via-white to-blue-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-inner flex justify-center items-center">
          <div className="relative w-full h-full">
            <Image
              src="/vaish.jpg"
              alt="Vaishnavan Image"
              className="object-cover border-4 border-pink-300 shadow-xl"
              fill
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300 mb-2">About Me</h2>
        <p className="text-center text-base text-gray-600 dark:text-gray-300 mb-10">My Introduction</p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-[400px] bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 dark:from-purple-800 dark:via-pink-800 dark:to-yellow-700 p-2 rounded-2xl shadow-lg">
            <Image
              src="/Vaish_1.jpg"
              alt="About"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am an undergraduate in Computer Science and Engineering at NIT Durgapur, India, <span className="text-blue-700 dark:text-blue-400 font-semibold">proficient in</span> 
              <span className="text-purple-600 dark:text-purple-400"> C, C++, SQL, Python, Java, HTML, CSS, and JavaScript</span>. With a strong foundation in software development and problem-solving, I
              consistently deliver high-quality, scalable solutions within deadlines. My passion lies in developing efficient and innovative
              technologies that solve real-world challenges. I am eager to apply my skills and knowledge in a dynamic, forward-thinking environment.
            </p>
            <div className="flex space-x-8 text-center mb-6">
              <div>
                <HTMLContent />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <Link href="/Awards" className="hover:text-purple-600 dark:hover:text-purple-400">Completed certifications</Link>
                </p>
              </div>
            </div>
            <Link href="/Vaish_Resume.pdf" download className="inline-block px-5 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-md hover:opacity-90">
              Click here & get my CV
            </Link>
          </div>
        </div>
      </section>

      {/* Skills & More */}
      <section id="skills" className="py-16 max-w-screen-xl mx-auto">
        <Edu />
      </section>
    </main>
  );
}
