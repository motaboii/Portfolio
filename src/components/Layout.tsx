import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
     <div className="min-h-screen bg-[#fdfeff] text-black">

      <nav className="w-full py-4 px-8 shadow-sm bg-[#ffffff]">
        <h1 className="text-2xl font-semibold">Pranjal Prasoon</h1>
      </nav>

      <main className="w-full mt-0">
        {children}
      </main>

    </div>
  );
};

export default Layout;
