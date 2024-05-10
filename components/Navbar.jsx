import Link from "next/link"




const Navbar = () => {

    const links = [
        {href: '/client', label: 'client'},
        {href: '/drinks', label: 'drinks'},
        {href: '/prisma-example', label: 'prisma'},
        {href: '/tasks', label: 'tasks'},
        {href: '/about', label: 'about'}
    ]


  return (
    <>
        <nav className="bg-base-300 py-4">
            <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
                <Link href='/' className="btn btn-primary">
                    Home
                </Link>
                <ul className="menu menu-horizontal md:ml-8">
                   {
                    links.map((link) => (
                        <li
                            key={link.href}
                        >
                            <Link href={link.href} className="capitalize">
                                {link.label}
                            </Link>
                        </li>
                    ))
                   } 
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar