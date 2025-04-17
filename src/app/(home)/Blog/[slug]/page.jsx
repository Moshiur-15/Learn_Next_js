import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      {slug}
      <Image
        src="https://media.istockphoto.com/id/2166573931/photo/reflection-of-people-on-glass-window.jpg?s=1024x1024&w=is&k=20&c=IwAaFw9LBFjdLSkU4oDqwiKCKmt4xyyqUpd-QDmKsdY="
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
};

export default page;
