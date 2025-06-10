'use client';

import {Home} from 'lucide-react';
import Link from "next/link";


export default function home_button() {
  return (
    <main className="min-h-screen font-sans text-gray-800 dark:text-white bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">
      
    <div className="absolute top-4 left-4 z-10">
        <Link href="/">
          <button
            aria-label="Go to home"
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Home size={20} />
          </button>
        </Link>
      </div>
    
    </main>
  );
}
