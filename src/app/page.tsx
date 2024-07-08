import Image from "next/image";
import {ai_head} from "@/../public/assets/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>InformationTechnologyLinkedinAdvisorBooster2024NoDownloads</p>
      <Image src={ai_head} alt="logo" className="ms-10 opacity-50 absolute right-0 " width={800}></Image>
    </main>
  );
}
