import Link from 'next/link';

const Index = () => (
    <div>
        <p>Service details (details.js)</p>


        <Link href="/services" passHref as="/diensten">
            <a>Services (href=services, as=/diensten) / (works on click, but fails on reload/refresh in live)</a>
        </Link>

        |

        <Link href="/services/test" passHref as="/diensten/test">
            <a>Service details (with /test)</a>
        </Link>
    </div>
);

export default Index;
