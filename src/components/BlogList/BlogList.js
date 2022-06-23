import React from 'react';
import BlogCard from '../BlogCard/blog-card';
import '../BlogList/bloglist.css';

const BlogList = ({blogger}) => {
    const cardComponent = blogger.map((user,i) =>{
        return(
            <BlogCard
                key={i}
                id={user.id}
                title={user.title}
                imageUrl={user.imageUrl}
                description={user.description}
            />
        )
    })
    return(
        <div className='blog-list'>
            {cardComponent}
        </div>

    );
}

export default BlogList;