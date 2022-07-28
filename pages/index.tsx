import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Header from '../components/header'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  let types = ['全部']
  types = types.concat(Array.from(new Set(allPosts.map(post => {
    return post.type;
  }))))
  return (
    <>
      <Layout>
        <Head>
          <title>Ken Blog</title>
        </Head>
        <Container>
          <Intro />
          <Header />

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              demo={heroPost.demo}
              type={heroPost.type}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} types = {types} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'demo',
    'type',
  ])

  return {
    props: { allPosts },
  }
}
