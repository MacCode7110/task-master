"use client"
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
        return <Link key={link.label} href={link.path} className="navbar-item">
            {link.label}
        </Link>
    })

    return (
        <nav className="navbar is-fixed-top has-background-info" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                {renderedLinks}
            </div>
        </nav>
    )
}

export default NavBar;