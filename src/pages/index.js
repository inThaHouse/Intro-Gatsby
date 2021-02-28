import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import useBlogPosts from '../hooks/use-blogPosts'
import PostPreview from '../components/PostPreview'
import Hero from '../components/Hero'

const Home = () => {
  const posts = useBlogPosts()
  return (
    <>
      <Hero />
      <Layout>
        <h1>hi this is index page</h1>
        <p>hi there</p>
        <Link to='/about'>go to about &rarr;</Link>

        <h2>blog</h2>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}

export default Home
