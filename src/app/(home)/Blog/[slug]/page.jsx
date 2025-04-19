"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const page = async ({ params }) => {
  const { slug } = params;
  const router = useRouter()

  const user = {
    name: "Alice Summers",
    email: "alice.summers@example.com",
    age: 29,
    isActive: true,
    image:
      "https://media.istockphoto.com/id/2166573931/photo/reflection-of-people-on-glass-window.jpg?s=1024x1024&w=is&k=20&c=IwAaFw9LBFjdLSkU4oDqwiKCKmt4xyyqUpd-QDmKsdY=",
  };


  return (
    <div className="max-w-xl mx-auto mt-10 p-6  shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">BLOGGER PROFILE [DETAILS ID : {slug} ]</h1>

      <div className="flex flex-col items-center gap-4">
        <Image
          src={user.image}
          alt={user.name}
          width={300}
          height={300}
          className=" object-cover"
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-sm">Age: {user.age}</p>
          <p
            className={`text-sm font-medium ${
              user.isActive ? "text-green-600" : "text-red-500"
            }`}
          >
            {user.isActive ? "ACTIVE" : "INACTIVE"}
          </p>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-700 leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <button onClick={()=>router.push("/Blog")} className="inline-block mt-3 px-4 py-1 bg-blue-400 text-white text-sm hover:bg-blue-600 duration-500">
        Back
      </button>
    </div>
  );
};

export default page;
