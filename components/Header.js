import Image from 'next/image';
import Link from 'next/link';
import data from '../data/headerSection.json';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src={data.logo} width={165} height={65} />
                    </a>
                </Link>
            </div>
            <div className="btn-try">
                <button>
                    Try free
                </button>
            </div>
        </header>
    )
};

export default Header;