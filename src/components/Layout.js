import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>Layout</div>
      {children}
    </>
  );
}

export default Layout;
