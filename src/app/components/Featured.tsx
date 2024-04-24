import collection from "@/public/images/collections.jpg";
import Image from "next/image";

import user_1 from "@/public/images/user-1.png";
import user_2 from "@/public/images/user-2.png";
import user_3 from "@/public/images/user-3.png";

import check_icon from "@/public/images/icons/check.svg";

const TOP_SELLERS = [
  {
    id: 1,
    image: user_1,
    isVerified: true,
    author: {
      name: "Tom Smith",
      title: "Handmade Accessories"
    },
    items: ["Camera Bags", "Grips & Rigs", "Professional Straps"]
  },
  {
    id: 2,
    image: user_2,
    isVerified: true,
    author: {
      name: "Emily Wong",
      title: "Optics Enthusiast"
    },
    items: [
      "Unique Lenses",
      "ND & UV Filters",
      "Special Effect Filters",
      "Lens Accessories"
    ]
  },
  {
    id: 3,
    image: user_3,
    isVerified: true,
    author: {
      name: "George Duke",
      title: "Vintage Collector"
    },
    items: ["60s & 70s Film Cameras", "Old Prints", "Disposables"]
  }
];

function Featured() {
  return (
    <section className="section-margin-primary mb-20">
      <div className="container">
        <h2 className="text-xl font-bold">Featured savings</h2>

        <div className="grid grid-cols-3 gap-6">
          <Image
            src={collection}
            alt="Instrument collections"
            placeholder="blur"
          />

          <div className="col-span-2">
            <h3 className="text-2xl font-bold">
              Turn used gear into new possibilities
            </h3>
            <p className="text-md">
              We offer a reliable platform for buying and selling used
              photography gear. Whether you&apos;re a beginner looking for
              affordable equipment or a professional photographer in search of
              high-end gear at a discounted price, we&apos;ve got you covered.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold">Top sellers this month</h3>

              <div className="grid grid-cols-3 gap-6">
                {TOP_SELLERS.map((sellers) => {
                  return (
                    <div key={sellers.id}>
                      <div className="flex items-center space-x-2">
                        <Image src={sellers.image} alt={sellers.author.title} />

                        <div className="space-y-1">
                          <h5 className="text-sm font-bold">
                            {sellers.author.name}
                          </h5>
                          <h6 className="text-xs font-semibold">
                            {sellers.author.title}
                          </h6>
                          <p className="flex items-center space-x-2 text-sm">
                            <Image src={check_icon} alt="Check icon" />
                            <span className="text-ui-dark-gray">
                              PIXEL VERIFIED
                            </span>
                          </p>
                        </div>
                      </div>

                      <ul className="list-disc list-inside mt-3 text-ui-dark-gray">
                        {sellers.items.map((item) => {
                          return (
                            <li key={item} className="text-sm">
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center space-x-6 mt-10">
                <button className="py-2 px-16 text-md bg-ui-brand-primary font-bold text-white">
                  BUY
                </button>
                <button className="py-2 px-16 text-md border-2 border-ui-dark-gray font-bold text-ui-dark-gray">
                  SELL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
