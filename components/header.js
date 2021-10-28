import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faRocket, faBars } from '@fortawesome/free-solid-svg-icons';

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const [session, loading] = useSession()

  const classNames = "relative text-gray-300 no-underline transition duration-150 hover:text-shadow-lg-white hover:text-gray-100 "

  return (
    <header className="bg-black bg-opacity-30">
      <nav className="max-w-6xl mx-auto">
        <div className="flex h-16 px-8 xl:px-0 items-center ">
          <div className="mr-auto">
            <div className="inline-flex mr-8"><Link href="/"><a className={classNames + " text-2xl w-4"}><FontAwesomeIcon icon={faRocket} className="absolute -top-4"/></a></Link></div>
            <div className="hidden lg:inline-flex mr-8"><Link href="/"><a className={classNames}>Home</a></Link></div>
            <div className="hidden lg:inline-flex mr-8"><Link href="/developers"><a className={classNames}>Developers</a></Link></div>
            <div className="hidden lg:inline-flex"><Link href="/nfts"><a className={classNames}>NFTs</a></Link></div>

          </div>
          <div className="hidden lg:inline-flex ml-auto"><Link href="/play"><a className={classNames + " bg-indigo-300 px-5 py-2 text-indigo-600 font-bold text-shadow-none rounded-lg hover:text-indigo-600 hover:bg-indigo-200"}><FontAwesomeIcon icon={faGamepad} /> Play now</a></Link></div>
          <div className="inline-flex lg:hidden ml-auto"><Link href="/play"><a className={classNames + " bg-indigo-300 px-5 py-2 text-indigo-600 font-bold text-shadow-none rounded-lg hover:text-indigo-600 hover:bg-indigo-200"}><FontAwesomeIcon icon={faBars} /></a></Link></div>

        </div>
      </nav>
    </header>
  )
}
