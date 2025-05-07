import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='pt-[78px]'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
