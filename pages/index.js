import Link from 'next/link';

const Index = () => (
    <div>
        <p>Hello Next.js</p>

        <Link href="/services" passHref as="/diensten">
            <a>Services (href=services, as=/diensten) / (works on click, but fails on reload/refresh in live)</a>
        </Link>
        <br />
        <Link href="/diensten" passHref as="/diensten">
            <a>Services (href=diensten, as=/diensten) / (404 in live)</a>
        </Link>
        <br />

        <Link href="/services" passHref as="/services">
            <a>Services (href=services, as=/services)</a>
        </Link>

        <hr />

        <Link href="/services/[slug]" passHref as="/diensten/test">
            <a>Service details</a>
        </Link>
    </div>
);

export default Index;