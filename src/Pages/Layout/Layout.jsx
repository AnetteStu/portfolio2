import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className="wrapper">
      <Navigation/>
        <Outlet/>
        <Footer/>
      </div>
    </>

  )
}
