"use client";

import camera_man from "@/public/images/man-with-camera.jpg";
import tablet from "@/public/images/tablet.jpg";
import click_photo from "@/public/images/click-photo.jpg";
import search_icon from "@/public/images/icons/search.svg";
import arrow_right from "@/public/images/icons/arrow-right.svg";

import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function Offer() {
  return (
    <section className="section-margin-primary">
      <div className="container">
        <div className="grid grid-cols-2 gap-6">
          <div className="md:block hidden">
            <Image src={camera_man} alt="Man with cameras" placeholder="blur" />
          </div>

          <div className="md:max-w-lg md:col-span-1 col-span-full">
            <h3 className="text-2xl font-bold">
              New to photography? Let us help!
            </h3>
            <p className="text-md">
              We offer a variety of written & recorded guides for all aspects of
              photography, ranging from equipment handling to artistic theory.
            </p>
            <div className="inline-flex items-center space-x-2 mt-4">
              <div>
                <Image src={search_icon} alt="Search icon" height={14} />
              </div>
              <input
                type="search"
                placeholder="Search Guide"
                className="bg-transparent border-0 focus:outline-0"
              />
            </div>

            <div className="space-y-5 mt-4">
              <RenderRow
                image={tablet}
                title="Image Editing"
                text="Learn the basics of Adobe Lightroom and elevate your photos
                    to a new standard."
                link="#"
              />

              <RenderRow
                image={click_photo}
                title="Image Editing"
                text="Learn the basics of Adobe Lightroom and elevate your photos
                    to a new standard."
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;

interface RenderRowProps {
  image: string | StaticImport;
  title: string;
  text: string;
  link: string;
}

function RenderRow({ image, title, text, link }: RenderRowProps) {
  return (
    <div className="flex items-center gap-4 md:flex-row flex-col">
      <div>
        <Image src={image} alt={title} placeholder="blur" />
      </div>

      <div>
        <h5 className="text-md font-semibold">{title}</h5>
        <p className="text-sm">{text}</p>

        <div className="mt-2">
          <Link
            href={link}
            className="text-sm inline-flex items-center space-x-2 border-b border-gray-200"
          >
            <span>Read more </span>

            <Image
              src={arrow_right}
              alt="Arrow right icon"
              height={8}
              className="right-arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
