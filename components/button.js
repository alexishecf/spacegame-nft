import React from 'react'
import Link from 'next/link';



export default function Button({ href, children, buttonType = "primary", className }) {
    const classes = {
        "primary": "transition duration-150 no-underline inline-block px-8 py-3 rounded-md font-semibold select-none rounded-md text-white bg-indigo-500 hover:bg-indigo-600",
        "secondary": "transition duration-150 no-underline inline-block px-8 py-3 rounded-md font-semibold select-none rounded-md text-white bg-gray-800 hover:bg-gray-700",
        "ghost": "transition duration-150 no-underline inline-block px-8 py-3 rounded-md font-semibold select-none rounded-md text-indigo-500 bg-indigo-100 hover:bg-indigo-200"
    }

    return (
        <>
            {href.startsWith("/") ?
                <Link href={href}><a className={classes[buttonType] + " " + className}>{children}</a></Link> :
                <a href={href} className={classes[buttonType]  + " " + className}>{children}</a>
            }
        </>
    )
}
