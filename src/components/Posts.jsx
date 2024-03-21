import React, { useState } from 'react'

import Thumbnail1 from '../imgs/blog2.jpg'
import Thumbnail2 from '../imgs/blog10.jpg'
import Thumbnail3 from '../imgs/blog8.jpg'
import Thumbnail4 from '../imgs/blog22.jpg'
import PostItem from '../components/PostItem'


const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'AI in education.',
        desc: 'The leap into a new era of machine intelligence carries risks and challenges, but also plenty of promise',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'entertainment',
        title: 'Avengers: Endgame Review.',
        desc: 'The Real Heroes Were the Friends We Made Along the Way',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'Weather or Climate ... What is the difference.',
        desc: 'While weather refers to short-term changes in the atmosphere, climate refers to atmospheric changes over longer periods of time, usually 30 years or more.',
        authorID: 13
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'uncategorized',
        title: 'Why travel should be considered an essential human activity.',
        desc: 'Travel is not rational, but it is in our genes. Here is why you should start planning a trip now.',
        authorID: 11
    },
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    
    <section className="posts">
        <div className="container posts__container">
           {
             posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID} />)
           }
        </div>
    </section>
  )
}

export default Posts