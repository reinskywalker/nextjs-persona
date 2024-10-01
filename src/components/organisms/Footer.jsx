import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="py-6 text-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full">
            <p className="text-md">
                Made with ❤️ by{' '}
                <Link href="https://github.com/reinskywalker/nextjs-persona" passHref>
                    <span className="text-rose-600 dark:text-rose-400 hover:underline cursor-pointer">
                        reinskywalker
                    </span>
                </Link>
            </p>
        </footer>
    );
}

export default Footer;