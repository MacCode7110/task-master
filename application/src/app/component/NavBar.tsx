'use client'
import Link from "next/link";

function NavBar() {
    const links = [
        {
            label: 'TaskMaster', 
            path: '/'
        },
        {
            label: 'Completed Tasks',
            path: '/CompletedTaskView'
        },
    ]

    const renderedLinks = links.map((link) => {
        return <Link key={link.label} href={link.path}>
            {link.label}
        </Link>
    })

    return (
        <div>
            {renderedLinks}
        </div>
    )
}

export default NavBar;