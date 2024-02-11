import React from "react";
import Image from "next/image";
import rightKnife from "@/../public/byteverse/judgesKnife.svg";
import Category from "./category";
import slist from "./sponsers.json"
const Sponsers=()=>{
    return(
        <>
        
        {/* {console.log(slist["title-sponsers"])} */}
            <div className="w-full flex flex-col items-center">
                <Image src={rightKnife} className="" style={{scale:"80%"}} />
                <Category title="TITLE SPONSERS" items={slist["title-sponsers"]} />
                <Category title="ASSOCIATE SPONSERS" items={slist["associate-sponsers"]} />
                <Category title="SUBEVENT SPONSERS" items={slist["sub-event-sponsers"]} />
                
            </div>
        </>
    );
}
export default Sponsers;