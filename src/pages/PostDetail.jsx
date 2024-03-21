import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../imgs/blog21.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat, neque iusto fuga distinctio quis. Quibusdam quasi officia fugiat, soluta dolorum esse. Nobis voluptas nulla sint totam eius veritatis inventore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet nihil corrupti aperiam quis repellendus tempora vitae unde sapiente saepe, voluptate quod ipsam sint consectetur nam quaerat modi neque labore libero repellat harum, omnis nulla facere. Iusto vero tempore tenetur perferendis velit omnis, nisi pariatur non illo. Labore, voluptatem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex reprehenderit illum perspiciatis mollitia impedit, deserunt non quos laudantium cum minima incidunt. Eius nisi fuga mollitia, excepturi possimus, velit delectus praesentium molestias minima dignissimos, reiciendis tempore. Ullam esse reiciendis soluta natus, non, repellendus ipsam incidunt illo amet, debitis tempore quae. Vitae soluta eaque accusantium officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sequi eaque numquam soluta reiciendis illo molestias laboriosam blanditiis! Nisi, minus.
        </p>
      </div>
    </section>
  )
}

export default PostDetail