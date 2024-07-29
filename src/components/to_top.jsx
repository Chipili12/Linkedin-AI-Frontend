import Image from "next/image";
import { arrow  } from "/public/assets/index";

export default function toTop() {
    return (
        <div
            className="fixed bottom-10 right-20 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <Image src={arrow} width={40}  alt="arrow" />
            
        </div>
    );
}
