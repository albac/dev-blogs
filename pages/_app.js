import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className="max-h-fit bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-400 text-base font-medium">
            <div className="mx-auto w-9/12 tracking-tight">
                <header>
                    <nav className="pt-2">
                        <ul className="flex flex-row justify-center space-x-4">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
