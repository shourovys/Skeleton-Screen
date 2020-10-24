import React, { useEffect, useState } from 'react';
import SkeletonArticle from '../Skeleton/SkeletonArticle/SkeletonArticle';
import Post from './Post';

const Article = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => setPosts(data))
        }, 6000);
    }, [])

    return (
        <div>
            <h2>Articles</h2>
            {
                posts &&
                posts.map(post => <Post post={post} key={post.id} />)
            }
            {
                posts.length === 0 &&
                [1, 2, 3, 4, 5].map(n => <SkeletonArticle key={n} theme='dark' />)

            }
        </div>
    );
};

export default Article;