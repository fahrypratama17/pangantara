import "@/shared/styles/globals.css";
import Navbar from "@/shared/component/Navbar";
import Footer from "@/shared/component/Footer";
import { getSession } from "@/shared/repository/session-manager/action";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <>
      <Navbar
        authUser={{
          isLoggedIn: Boolean(session.isLoggedIn),
          name: session.user?.name,
          address: session.user?.address,
          role: session.user?.role,
        }}
      />
      {children}
      <Footer />
    </>
  );
}
