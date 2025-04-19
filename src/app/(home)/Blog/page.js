// app/components/BlogList.jsx
"use client";
import Link from "next/link";

const blog = [
  {
    id: 1,
    name: "Alice Summers",
    email: "alice.summers@example.com",
    age: 29,
    isActive: true,
  },
  {
    id: 2,
    name: "Brandon Lee",
    email: "brandon.lee@example.com",
    age: 35,
    isActive: false,
  },
  {
    id: 3,
    name: "Chloe Martin",
    email: "chloe.martin@example.com",
    age: 22,
    isActive: true,
  },
  {
    id: 4,
    name: "Daniel Kim",
    email: "daniel.kim@example.com",
    age: 41,
    isActive: false,
  },
  {
    id: 5,
    name: "Eva Chen",
    email: "eva.chen@example.com",
    age: 31,
    isActive: true,
  },
];

export default function Blogs() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 container mx-auto">
      {blog.map((b) => (
        <div
          key={b.id}
          className="border p-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-1">{b.name}</h2>
          <p className="text-sm text-gray-600">{b.email}</p>
          <p className="text-sm">Age: {b.age}</p>
          <p
            className={`text-sm font-medium ${
              b.isActive ? "text-green-600" : "text-red-500"
            }`}
          >
            {b.isActive ? "ACTIVE" : "INACTIVE"}
          </p>
          <Link
            href={`/Blog/${b.id}`}
            className="inline-block mt-3 px-4 py-1 bg-blue-400 text-white text-sm hover:bg-blue-600 duration-500"
          >
            View Profile
          </Link>
        </div>
      ))}
    </div>
  );
}
