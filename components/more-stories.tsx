import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import Router, { useRouter,withRouter } from "next/router";
import Link from 'next/link';

type Props = {
  posts: Post[],
  types: string[]
}

const MoreStories = ({ posts, types }: Props) => {
  const router = useRouter()
  //路由格式为'/projects/:id'
  const currentType= router.query.type 
  if (currentType && currentType !== '全部') {
    posts = posts.filter(post => post.type === currentType)
  }
  return (
    <section>
      <div className='div-flex banner'>
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          更多项目
        </h2>
        <div className='text-align-center'>
          类型筛选:
          {types.map((type) => (
            <Link  as={`?type=${type}`} href={`?type=${type}`} key = {type}>
              <a className="hover:underline post-filter">{type}</a>
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            demo={post.demo} 
            type={post.type}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
