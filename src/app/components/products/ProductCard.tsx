import heart_icon from "@/public/images/icons/heart.svg";
import comparison_icon from "@/public/images/icons/comparison.svg";
import star_icon from "@/public/images/icons/star.svg";
import clock_icon from "@/public/images/icons/clock.svg";

import Image, { StaticImageData } from "next/image";
import Switch from "./Switch";
import AddToCart from "./AddToCart";
import { IconHeart } from "@/src/assets/icons/IconHeart";
import { clsx } from "clsx";
import { useState } from "react";

interface ProductProps {
  item: {
    id: number;
    image: string | StaticImageData;
    title: string;
    shortDescription: string;
    features: string[] | [];
    time: string;
    originalPrice: string;
    oldPrice: string | null;
    review: string;
  };
}

function ProductCard(props: ProductProps) {
  const { item } = props;

  const [selectLike, setSelectLike] = useState(false);

  return (
    <div className="product-box">
      <div className="flex justify-end gap-3">
        <button onClick={() => setSelectLike((prev) => !prev)}>
          <IconHeart
            width={20}
            height={19}
            className={clsx(
              "text-ui-brand-primary",
              selectLike ? "fill-current text-current" : ""
            )}
          />
        </button>

        <div className="">
          <button>
            <Image src={comparison_icon} alt="comparison icon" height={14} />
          </button>
        </div>
      </div>

      <Image src={item.image} alt="comparison icon" />

      <div>
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-bold">{item.title}</h5>

          <p className="inline-flex space-x-2">
            <Image src={star_icon} alt="star icon" />
            <span>{item.review}</span>
          </p>
        </div>
        <h5 className="text-md">{item.shortDescription}</h5>
      </div>

      <div className="mt-2">
        {item.features.length > 0 ? (
          <ul className="list-disc list-inside">
            {item.features.map((list) => {
              return (
                <li key={list} className="text-sm">
                  {list}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="space-y-3">
            <Switch />
            <AddToCart />
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="flex justify-end line-through text-gray-400">
          {item.oldPrice}
        </p>

        <div className="flex items-center justify-between mt-2">
          <p className="inline-flex space-x-2">
            <Image src={clock_icon} alt="clock icon" />
            <span>{item.time}</span>
          </p>
          <p className="text-ui-black text-lg font-bold">
            {item.originalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
