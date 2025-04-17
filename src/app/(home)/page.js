import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <div>
            Home
            <Link href='/Blog'>Blogs</Link>
        </div>
    );
};

export default Home;