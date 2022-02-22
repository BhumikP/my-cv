import Head from "next/head";
import Image from "next/image";
import { myData } from "../components/constant";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid md:grid-cols-2  flex gap-4">
        <div className="relative  bg-gradient-to-r from-sky-500 to-indigo-500">
          <Image
            className="opacity-30"
            src="/me.jpg"
            alt="My Image"
            layout="fill"
            objectFit="cover"
          />
          <h2 className=" flex justify-center text-white text-3xl font-bold">
            Hey,I&apos;m Bhumik Prajapati
          </h2>
          <h3 className="flex justify-center text-white">
            JavaScript Developer
          </h3>
        </div>
        <div className="py-8 mx-5">
          {myData?.map((data) => {
            return (
              <div className="flex flex-row mb-5" key={data.id}>
                <h1 className="text-md text-primary w-60 uppercase">
                  {data.title}
                </h1>
                <div className="w-10/12">{data.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
