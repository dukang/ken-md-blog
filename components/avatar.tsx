import Link from "next/link"

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
     
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      {/* <div className="text-xl font-bold">{name}</div> */}
      <Link as={`/posts/about`} href="/posts/about">
              <a className="hover:underline">{name}</a>
      </Link>
    </div>
  )
}

export default Avatar 
