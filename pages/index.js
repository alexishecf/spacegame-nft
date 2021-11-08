import Layout from '../components/layout'
import Head from 'next/head'
import Button from '../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCertificate, faRocket, faStar, faMoon, faGem, faAtom, faCheck } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'

export default function Page() {

  const myStyle = {
    "background-image": "url('/images/hero.png')",
    "background-size":"cover",
    "background-repeat":"no-repeat",
    "background-position":"center 50%",

  }

  

  return (
    <Layout>
      <Head>
        <title>SpaceGame | Home</title>
      </Head>

      <div className="relative overflow-hidden" style={myStyle}>
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 xl:px-0 py-16" >

          {/*Hero*/}
          <div>
            <div className="relative h-8 ">
              <div className="absolute top-4 text-yellow-200 text-xs"><FontAwesomeIcon icon={faStar} /></div>
              <div className="absolute -top-1 left-3 text-yellow-200 text-xs"><FontAwesomeIcon icon={faStar} /></div>
              <div className="absolute -top-1 left-8 text-gray-300 text-lg"><FontAwesomeIcon icon={faMoon} /></div>
              <div className="absolute top-6 left-6 text-yellow-200 text-xs"><FontAwesomeIcon icon={faStar} /></div>
              <div className="absolute left-1 text-red-400 text-3xl"><FontAwesomeIcon icon={faRocket} /> </div>
              <h1 className="text-4xl font-black tracking-tight absolute left-14 -top-1"> SpaceGame</h1>

            </div>
            <p className="mt-6 max-w-3xl text-justify bg-gray-900 bg-opacity-80 text-gray-400 rounded-md px-4 py-4">
              This is a spacegame built with Unity that uses NFTs for items and collectibles, it also uses the <strong>GLM</strong> currency, a cryptocurrency especially made for the game that is used to buy and sell various things in-game.
              <br />
              All things happen on a testnet and you need a <a href="https://github.com/" target="_blank">Github account</a> to play this game.

            </p>
            <div className="mt-12">
              <Button href="/api/auth/signin/github"><FontAwesomeIcon icon={faGithub} /> Sign in</Button>
              <Button href="/test" buttonType="secondary" className="ml-1"><FontAwesomeIcon icon={faCertificate} /> View NFTs</Button>

            </div>
          </div>
          {/*/Hero*/}
        </div>
      </div>


      <div className="bg-black bg-opacity-20 pt-12 pb-16 ">
        <div className="text-center max-w-6xl px-8 xl:px-0 mx-auto">
          <div>
            <h1 className="inline-block text-4xl font-bold text-indigo-300 tracking-tighter px-4">Features</h1>
          </div>


          <div className="mt-6">
            {
              [{
                feature: "NFTs",
                desc: "In-game items are NFTs and can be exchanged on the blockchain",
                icon: faCertificate,
                color: "indigo",
                href: "/nfts"
              }, {
                feature: "Play 2 Earn",
                desc: "Play to earn GLM, a cryptocurrency especially made for the game",
                icon: faGem,
                color: "blue",
                href: "/earn"
              }, {
                feature: "Multiplayer",
                desc: "Evolve in a universe full of other players and choose to cooperate or fight",
                icon: faAtom,
                color: "purple",
                href: "/multiplayer"
              }


              ].map(elt => (
                <Link href={elt.href}>
                  <div className={`group bg-opacity-90 shadow-lg cursor-pointer relative overflow-hidden align-top w-60 block mx-auto md:inline-block h-40 bg-${elt.color}-500 transition duration-150 hover:bg-${elt.color}-400 rounded-lg md:m-2 my-4`}>
                    <div className="absolute -top-20 -left-12 z-0" style={{ "font-size": "140px" }}><FontAwesomeIcon className={`text-${elt.color}-400 transition duration-150 text-opacity-50 group-hover:text-${elt.color}-500`} icon={elt.icon} /></div>
                    <div className="relative z-10">
                      <h2 className="text-3xl mt-5 font-black tracking-tight text-gray-900 text-opacity-80">{elt.feature}</h2>
                      <p className="px-6 md:px-8 mt-2 text-md tracking-tighter text-gray-200 text-opacity-90 font-semibold text-justify">{elt.desc}</p>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-40 pt-12 pb-16 ">
        <div className="max-w-6xl px-8 xl:px-0 mx-auto">
          <div>
            <h1 className="inline-block text-4xl font-bold  tracking-tighter text-indigo-400 px-4">How it works</h1>
          </div>


          <div className="mt-16 ml-0 lg:ml-8">

            <div className="">
              <div className="inline-block align-middle rounded-full border-4 hover:bg-indigo-200 hover:text-white transition duration-100 border-indigo-200 text-indigo-200 w-20 h-20 text-center pt-4 text-3xl font-bold">
                1
              </div>
              <div className="inline-block  align-middle  ml-4 w-48 lg:w-64" >
                <h1 className="text-xl font-bold">Sign in with Github</h1>
                <p>Create an account seamlessly with Github</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="inline-block align-middle rounded-full border-4 hover:bg-indigo-300 hover:text-white transition duration-100 border-indigo-300 text-indigo-300 w-20 h-20 text-center pt-4 text-3xl font-bold">
                2
              </div>
              <div className="inline-block  align-middle  ml-4 w-48 lg:w-64" >
                <h1 className="text-xl font-bold">Link a public key</h1>
                <p>Link a public key to your account and safely sign a transaction to prove ownership</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="inline-block align-middle rounded-full border-4 hover:bg-indigo-400 hover:text-white transition duration-100 border-indigo-400 text-indigo-400 w-20 h-20 text-center pt-4 text-3xl font-bold">
                3
              </div>
              <div className="inline-block  align-middle  ml-4 w-48 lg:w-64" >
                <h1 className="text-xl font-bold">Receive starter airdrop</h1>
                <p>Starter NFTs items and 500 GLM will be sent to the public key you linked</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="inline-block align-middle rounded-full border-4 hover:bg-green-500 hover:text-white transition duration-100 border-green-500 text-green-500 w-20 h-20 text-center pt-4 text-3xl font-bold">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="inline-block  align-middle  ml-4 w-48 lg:w-64" >
                <h1 className="text-xl font-bold">That's all</h1>
                <p>You're all set! Get in your spaceship and start earning GLM and NFTs by exploring the universe!</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-40 pt-12 pb-16 ">
        <div className="max-w-6xl px-8 xl:px-0 mx-auto">
          <div>
            <h1 className="inline-block text-4xl font-bold  tracking-tighter text-indigo-400 px-4">Screenshots</h1>
          </div>


          <div className="mt-6 ml-0 lg:ml-8">
            <div className="inline-block mr-2 mb-2 cursor-pointer w-48 h-32 rounded-md bg-black text-gray-700 font-semibold text-center pt-12">
              soon...
            </div>
            <div className="inline-block mr-2 mb-2 cursor-pointer w-48 h-32 rounded-md bg-black text-gray-700 font-semibold text-center pt-12">
              soon...
            </div>
            <div className="inline-block mr-2 mb-2 cursor-pointer w-48 h-32 rounded-md bg-black text-gray-700 font-semibold text-center pt-12">
              soon...
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}