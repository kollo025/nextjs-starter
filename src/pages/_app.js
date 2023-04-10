import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs';


function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey="pk_test_d29ya2luZy1wcmltYXRlLTM3LmNsZXJrLmFjY291bnRzLmRldiQ" {...pageProps} >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;