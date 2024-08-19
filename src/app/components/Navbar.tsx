//Next Components
import Link from 'next/link'

export default function Navbar() {
    return(
        <nav>
            <Link href="/">Landing</Link>
            <Link href="/example">Example</Link>
        </nav>
    )
}