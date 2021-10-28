import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { faGithub,  } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="py-5 bg-black bg-opacity-50 px-8 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl tracking-tight font-semibold">SpaceGame</h3>
        <p className="mt-2">Source available on <a href="" target="_blank" href="https://github.com/alexishecf/spacegame-nft" className="no-underline text-white"><FontAwesomeIcon icon={faGithub} /> Github</a></p>
        <p className="text-gray-600">Game version: coming soon | Web app version: 0.1</p>
      </div>
    </footer>
  )
}
