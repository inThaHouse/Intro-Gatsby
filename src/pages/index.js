import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Home = () => (
  <Layout>
    <h1>hi this is index page</h1>
    <p>hi there</p>
    <Link to='/about'>go to about &rarr;</Link>
  </Layout>
)

export default Home
