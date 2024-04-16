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
    <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<Loading />}>
        {res &&
          res?.products?.map((d, i) => {
            return <Product item={d} key={i} />;
          })}
      </Suspense>
    </div>
  );
}
