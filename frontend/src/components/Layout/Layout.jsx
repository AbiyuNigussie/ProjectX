import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="h-full relative">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
