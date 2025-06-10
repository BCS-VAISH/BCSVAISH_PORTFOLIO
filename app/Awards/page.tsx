
import Awd from '@/components/award'
import Link from 'next/link'
import Scroll from '@/components/scroll'
import { Home } from 'lucide-react';

export default function Awards(){
    return <main className="min-h-screen font-sans text-gray-800 dark:text-white bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <Scroll/>
      {/* Home Button - Top Left */}
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
    <Awd/>
    </main>
}