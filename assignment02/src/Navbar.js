export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">WebSiteName</a>
        <ul>
            <li className="active">
                <a href="/home">Home</a>
            </li>
            <li>   
                <a href="/page1">Page 1</a>
            </li>
            <li>
                <a href="/page2">Page 2</a>
            </li>
            <li>
                <a href="/page3">Page 3</a>
            </li>
        </ul>
    </nav>
}