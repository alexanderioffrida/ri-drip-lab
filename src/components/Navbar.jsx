import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-2 z-50 transition-colors duration-500 ${isHomePage ? 'bg-transparent' : 'bg-black'}`}>
    
            <Link to="/">
                <img
                    src={`${import.meta.env.BASE_URL}logo-drip-Ri.png`}
                    alt="RI Platform Logo"
                    className="w-[75px] h-[75px] object-contain block"
                />
            </Link>
            
            <nav className="flex gap-6 text-lg font-light text-white" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                <Link to="/about" className="hover:text-[#6cc282] transition-colors">About</Link>
                <Link to="/features" className="hover:text-[#6cc282] transition-colors">Features</Link>
                <Link to="/showcase" className="hover:text-[#6cc282] transition-colors">Showcase</Link>
                <Link to="/community" className="hover:text-[#6cc282] transition-colors">Community</Link>
                <Link to="/conference" className="hover:text-[#6cc282] transition-colors">Conference</Link>
                <Link to="/join" className="hover:text-[#6cc282] transition-colors">Join</Link>
            </nav>
        </header>
    );
}
