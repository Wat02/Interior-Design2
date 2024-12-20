import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="col-span-12 md:col-span-4 text-[25px] leading-[34px] font-semibold text-white pt-[13px]">
            <h1>DeCoreDesign</h1>
          </div>
          <div className="space-y-5 text-white">
            <h1 className="h1">Send us a message to book an appointment</h1>
          </div>
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        {children}
      </section>
    </div>
  );
};

export default Layout;
