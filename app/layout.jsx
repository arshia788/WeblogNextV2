import './globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// providers
import SplashScreenProvider from './providers/splash-screen-provider';
import ReduxToolkitProvider from './providers/redux-toolkit-provider';
import ToastProvider from './providers/toas-provider';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ReduxToolkitProvider>
          <SplashScreenProvider>
            <ToastProvider>
              <div className='flex flex-col gap-12'>
                <Header />

                <div className='container mx-auto'>
                  {children}
                  <Footer />
                </div>
              </div>
            </ToastProvider>
          </SplashScreenProvider>
        </ReduxToolkitProvider>
      </body>

    </html>
  )
}
