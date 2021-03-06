import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
