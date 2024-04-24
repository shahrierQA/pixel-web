"use client";

// products
import back_camera from "@/public/images/back-camera.png";
import camera from "@/public/images/camera.png";
import drone from "@/public/images/drone.png";
import lense_box from "@/public/images/lense-box.png";
import tripod from "@/public/images/tripod.png";

import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    id: 0,
    image: lense_box,
    title: "2 Lens kit",
    shortDescription: "Canon",
    features: [],
    time: "2h 27m",
    originalPrice: "$1,799",
    oldPrice: null,
    review: "4.8"
  },
  {
    id: 1,
    image: camera,
    title: "EOS R5",
    shortDescription: "Canon",
    features: [
      "45MP Full-Frame CMOS Sensor",
      "Sensor-Shift Image Stabilization",
      "DIGIC X Image Processor",
      "8K30 Raw Video"
    ],
    time: "2h 27m",
    originalPrice: "$3,699",
    oldPrice: "$3,899",
    review: "4.6"
  },
  {
    id: 2,
    image: drone,
    title: "Mavic 3",
    shortDescription: "DJI",
    features: [
      '20MP 4/3" CMOS Hasselblad',
      "4K Slow Motion at 120 fps",
      "f/2.8 to f/11 Adjustable Aperture",
      "DJI RC Remote Included"
    ],
    time: "21h 3m",
    originalPrice: "$1,599",
    oldPrice: "$1,749",
    review: "4.7"
  },
  {
    id: 3,
    image: tripod,
    title: "Carbon Fiber Tripod",
    shortDescription: "Benro",
    features: [
      "Load Capacity: 26.4 lb",
      `Max Height: 64.2"`,
      `Min Height: 16.1"`,
      `Folded Length: 16.1"`
    ],
    time: "3h 45m",
    originalPrice: "$319",
    oldPrice: "$369",
    review: "4.2"
  },
  {
    id: 4,
    image: back_camera,
    title: "HERO 11 Black Mini",
    shortDescription: "GoPro",
    features: [
      "24.7MP Improved Performance",
      "Smooth 5.0 Image Stabilization",
      "8x Slow-Motion Video",
      "5.3K60/2.7K240 Video"
    ],
    time: "7h 38m",
    originalPrice: "$289",
    oldPrice: "$349",
    review: "4.2"
  }
];

function Products() {
  return (
    <section className="section-margin-primary">
      <div className="container">
        <div className="grid grid-cols-5">
          {/* product box  */}
          {PRODUCTS.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
