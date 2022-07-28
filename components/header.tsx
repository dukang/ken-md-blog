import Link from 'next/link'
import UnderlineLink from './links/UnderlineLink';

const Header = () => {
  return (
   <nav className='flex flex-wrap gap-4 items-center justify-center my-10'>
      <UnderlineLink href='/'>
        项目
      </UnderlineLink>
      | {' '}
      <UnderlineLink href='/posts/about'>
        个人简介
      </UnderlineLink > {' '}
      | {' '}
      < UnderlineLink href="https://space.bilibili.com/588878976" >
        GitHub
      </UnderlineLink > {' '}
      | {' '}
      < UnderlineLink href="https://github.com/dukang" >
        B站主页
      </UnderlineLink > {' '}
    </nav >
  )
}

export default Header
