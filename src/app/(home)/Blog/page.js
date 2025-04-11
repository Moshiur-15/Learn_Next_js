import Link from 'next/link';
import React from 'react';

const Blogs = () => {
    const blog=[
        {
          "id": 1,
          "name": "Alice Summers",
          "email": "alice.summers@example.com",
          "age": 29,
          "isActive": true
        },
        {
          "id": 2,
          "name": "Brandon Lee",
          "email": "brandon.lee@example.com",
          "age": 35,
          "isActive": false
        },
        {
          "id": 3,
          "name": "Chloe Martin",
          "email": "chloe.martin@example.com",
          "age": 22,
          "isActive": true
        },
        {
          "id": 4,
          "name": "Daniel Kim",
          "email": "daniel.kim@example.com",
          "age": 41,
          "isActive": false
        },
        {
          "id": 5,
          "name": "Eva Chen",
          "email": "eva.chen@example.com",
          "age": 31,
          "isActive": true
        }
      ]
      
    return (
        <div>
            blogs page
            {blog.map(b=> <div key={b.id}>
                <Link href={`/blog/${b.id}`}>{b.name}</Link>
            </div>)}
        </div>
    );
};

export default Blogs;