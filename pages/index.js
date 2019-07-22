import Link from 'next/link';

const Index = () => (
    <div>
        <p>Hello Next.js</p>

        <Link href="/services" passHref as="/services">
            <a>Services</a>
        </Link>

        <br />

        <Link href="/services/[uid]" passHref as="/services/test">
            <a>Service details</a>
        </Link>
    </div>
);

export default Index;
