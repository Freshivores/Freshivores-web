import { MainCategory, MainCategoryResponse } from "@/types/category";
import { Caveat } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({ subsets: ["latin"], weight: "700" });

const colorData = [
  {
    title: "Spice Mill",
    bgColor: "bg-red-50",
    color: "text-red-500",
  },
  {
    title: "Flour Mill",
    bgColor: "bg-amber-50",
    color: "text-amber-500",
  },
  {
    title: "Oil Mill",
    bgColor: "bg-green-50",
    color: "text-green-500",
  },
];

export default async function Categories() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/category/main_category`
  );
  const mainCategories: MainCategoryResponse = await data.json();

  return (
    <section className="py-4 md:py-8">
      <div className="text-center mb-12 hidden">
        <h2 className="text-3xl font-bold mb-2">FRESH from the MILLS</h2>
        <p className="text-gray-600">(MILLED TO ORDER PRODUCTS)</p>
      </div>

      <div className="grid grid-rows-1 grid-flow-col md:grid-flow-row px-4 md:px-0 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {mainCategories?.map((category: MainCategory) => (
          <div
            key={category.title}
            className={`rounded-2xl p-8 py-20 relative overflow-hidden justify-center items-center flex min-w-[300px] md:min-w-0 ${
              colorData.find((color) => color.title === category.title)?.bgColor
            }`}
          >
            <div className="text-center mb-6">
              <Image
                src={`https://www.freshivores.com/${category.media.thumb_file_path}`}
                alt={category.title}
                width={200}
                height={100}
                priority
                className="mx-auto absolute top-1/2 lg:top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-600 mb-2 text-base">From Our</p>
              <h4
                className={`${caveat.className} ${
                  colorData.find((color) => color.title === category.title)
                    ?.color
                } text-5xl lg:text-6xl text-center`}
              >
                {category.title}
              </h4>
            </div>

            <div className="absolute bottom-6 right-6">
              <Image
                src={`https://www.freshivores.com/${category.media2?.file_path}`}
                alt={`${category.title} secondary image`}
                width={20}
                height={20}
                className="opacity-90 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
