'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const BlogDetails = ({ params }) => {
    const { slug } = params;

    const router = useRouter();
    return (
        <div>
            <h2>Blog Details</h2>
            <p>ID: {slug}</p>
            <button className='border p-2' 
            onClick={() => router.push('/Blog')}
            >Back to Blog</button>
        </div>
    );
};

export default BlogDetails;
