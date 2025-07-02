import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className={`absolute top-0 left-0 w-full text-white flex items-center justify-between px-8 py-1 z-50 ${isHomePage ? 'bg-transparent' : 'bg-black'}`}>
            
            <Link to="/">
            <img
                src="/logo-drip-Ri.png"
                alt="RI Platform"
                className="w-[75px] h-[75px] object-contain"
            />
            </Link>
            
            <nav className="flex gap-6 text-lg font-light" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif"}}>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/features" className="hover:underline">Features</Link>
                <Link to="/showcase" className="hover:underline">Showcase</Link>
                <Link to="/community" className="hover:underline">Community</Link>
                <Link to="/conference" className="hover:underline">Conference</Link>
                <Link to="/join" className="hover:underline">Join</Link>
            </nav>
        </header>
    );
}