"use client";

import { useState } from "react";
import { clsx } from "clsx";

function AddToCart() {
  const [value, setValue] = useState(0);

  return (
    <div className="flex items-center justify-between border border-ui-brand-primary text-md rounded-3xl">
      <button
        className="bg-ui-brand-primary px-5 py-1 text-lg text-ui-white rounded-l-3xl disabled:bg-ui-brand-secondary"
        onClick={() => setValue((prev) => prev - 1)}
        disabled={value === 0}
      >
        &minus;
      </button>
      <p>{value}</p>
      <button
        className="bg-ui-brand-primary px-5 py-1 text-lg text-ui-white rounded-r-3xl"
        onClick={() => setValue((prev) => prev + 1)}
      >
        &#x2B;
      </button>
    </div>
  );
}

export default AddToCart;
