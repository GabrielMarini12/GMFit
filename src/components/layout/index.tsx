import { Header } from "../header";
import { BtnWhatsapp } from "../btnWhatsapp";
import { Footer } from "../footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <BtnWhatsapp />
      <Footer />
    </>
  );
}
