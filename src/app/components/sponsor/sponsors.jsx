import React from "react";
import Image from "next/image";
import rightKnife from "@/../public/byteverse/judgesKnife.svg";
import Category from "./category";
import slist from "./sponsors.json";
import bg from "@/../public/byteverse/bgsponsor.svg";
const Sponsors = () => {
  return (
    <>
      <div id="sponsors" className="relative overflow-hidden">
        <Image
          src={bg}
          className="absolute lg:top-[-13rem]  top-[0rem] scale-[1.16] sm:scale-[1.13] md:scale-[1.11] lg:scale-[1.06] w-[100vw] "
          style={{ zIndex: "1" }}
        ></Image>
        <div
          id="sponsors"
          className="top-0 w-full flex flex-col items-center sponsor-grad"
          style={{ zIndex: "20" }}
        >
          <Image
            src={rightKnife}
            className=" mt-36"
            style={{ scale: "80%", zIndex: "10" }}
          />
          <Category
            title="TITLE SPONSORS"
            items={slist["title-sponsors"]}
            paperRollUrl="/byteverse/sponsor/title-sponsor.svg"
          />
          <Category
            title="ASSOCIATE SPONSORS"
            items={slist["associate-sponsors"]}
            paperRollUrl="/byteverse/sponsor/associate-sponsor.svg"
          />
          <Category
            title="SUBEVENT SPONSORS"
            items={slist["sub-event-sponsors"]}
            paperRollUrl="/byteverse/sponsor/subevent-sponsor.svg"
          />
          <Category
            title="EDUCATION SPONSORS"
            items={slist["education-sponsors"]}
            paperRollUrl="/sponsors/otherSponsors/g1.svg"
          />
          <Category
            title="CERTIFICATE SPONSORS"
            items={slist["certficate-sponsors"]}
            paperRollUrl="/sponsors/otherSponsors/g2.svg"
          />
        </div>
      </div>
    </>
  );
};
export default Sponsors;
