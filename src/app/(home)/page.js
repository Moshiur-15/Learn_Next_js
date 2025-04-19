import Link from "next/link";
import React from "react";

const Home = () => {
  return (
      <main className="min-h-screen">
        <div className="text-center mt-52">
          <Link
            href="/Blog"
            className="border px-12 py-3 bg-gray-200 text-8xl"
          >
            Blogs
          </Link>
        </div>
      </main>
  );
};

export default Home;
