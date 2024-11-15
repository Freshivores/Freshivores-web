import React from "react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="xl:container md:px-10 lg:px-20 mx-auto 2xl:px-32">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
