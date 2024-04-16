import Loading from "@/components/Loading";
import Product from "@/components/Product";
import Image from "next/image";
import { Suspense } from "react";
const getData = async () => {
  const data = await fetch("https://dummyjson.com/products", {
    method: "GET",
  });
  const result = await data.json();

  return result;
};

export default async function Home() {
  const res = await getData();
  return (
    <div>
      <div className="h-[300px] w-full flex justify-center items-center">
        <div className="h-full lg:w-[70%] w-[90%] bg-gray-500 rounded-sm p-5 text-center">
          <h1 className="text-white font-bold text-4xl">
            Nextjs App deploy in Vercel
          </h1>
          <p className="py-3 text-green-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            natus doloremque dicta odio quibusdam, inventore beatae sed aliquid
            est fuga, nulla quis nesciunt, tenetur totam enim ratione numquam
            voluptates blanditiis?
          </p>
        </div>
      </div>
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<Loading />}>
          {res &&
            res?.products?.map((d, i) => {
              return <Product item={d} key={i} />;
            })}
        </Suspense>
      </div>
    </div>
  );
}
