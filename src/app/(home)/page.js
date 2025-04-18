import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <div>
            Home
            <Link href='/Blog' className='border p-2 bg-gray-400 ml-5'>Blogs</Link>
        </div>
    );
};

export default Home;