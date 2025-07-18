import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Welcome to the Profile Showcase
      </h1>
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">
        Explore individual profiles of professionals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl px-4">
        <Link href="/foo-bar" className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <div>
            <Image
              src="/profiles/foo-bar.jpeg"
              alt="Foo Bar"
              width={400}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mt-2 text-gray-900 dark:text-gray-100">Mr. Foo Bar</h2>
              <p className="text-gray-600 dark:text-gray-300">Doctor</p>
            </div>
          </div>
        </Link>
        <Link href="/john-doe" className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <div>
            <Image
              src="/profiles/john-doe.jpeg"
              alt="John Doe"
              width={400}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mt-2 text-gray-900 dark:text-gray-100">Mr. John Doe</h2>
              <p className="text-gray-600 dark:text-gray-300">Doctor</p>
            </div>
          </div>
        </Link>
        {/* Add more profile links here */}
      </div>
    </div>
  );
};

export default Home;