import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart shopping starts here:
              <Image
                src="/assets/icons/arrow-right.svg"
                height={16}
                width={16}
                alt="arrow-right"
              ></Image>
            </p>
            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> Watcher</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            Searchbar
          </div>
          HeroCarosel
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-Text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          <div>todo</div>
        </div>
      </section>
    </>
  );
};

export default Home;
