import React from 'react';
import NavigationBar from '../components/home/NavigationBar';
import FeaturedPost from '../components/home/FeaturedPost';
import PostPreview from '../components/home/PostPreview';
import PostList from '../components/home/PostList';
import Sidebar from '../components/home/Sidebar';
import Pagination from '../components/home/Pagination';

function Home() {
    return (
        <div className="landing-container">
            <NavigationBar />

            <main className="container">
                <FeaturedPost />

                <div className="row mb-2">
                    <PostPreview />
                    <PostPreview />
                </div>

                <div className="row g-5">
                    <div className="col-md-8">
                        <PostList />
                        <Pagination />
                    </div>

                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
