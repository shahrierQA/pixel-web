import camera from "@/public/images/service-1.jpg";
import lense from "@/public/images/service-2.jpg";
import accessories from "@/public/images/service-3.jpg";
import arrow_right from "@/public/images/icons/arrow-right.svg";

import Image from "next/image";

const SERVICE_ITEMS = [
  {
    id: 1,
    alt: "Camera",
    image: camera,
    title: "Cameras",
    text: "Browse through our selection of cameras"
  },
  {
    id: 2,
    alt: "Lense",
    image: lense,
    title: "Lenses",
    text: "Find the sharpest lens for your photoshoot"
  },
  {
    id: 3,
    alt: "Accessories",
    image: accessories,
    title: "Accessories",
    text: "Highest quality accessories to fit your gear"
  }
];

function Services() {
  return (
    <section className="section-margin-primary">
      <div className="container">
        <div className="flex gap-6">
          {SERVICE_ITEMS.map((item) => {
            return (
              <div key={item.id} className="service-card">
                <div className="service-card-overlay"></div>
                <Image
                  src={item.image}
                  alt={item.alt}
                  placeholder="blur"
                  quality={75}
                />

                <div className="flex items-center justify-between absolute bottom-2 w-full px-6 z-10">
                  <div className="space-y-1">
                    <h3 className="text-xl text-ui-white">{item.title}</h3>
                    <p className="text-sm text-ui-gray">{item.text}</p>
                  </div>
                  <Image
                    src={arrow_right}
                    alt="Arrow right icon"
                    height={18}
                    className="right-arrow"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
