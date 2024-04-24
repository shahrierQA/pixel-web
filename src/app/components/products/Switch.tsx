"use client";

import { useState } from "react";
import { clsx } from "clsx";

function Switch() {
  const [input, setInput] = useState({
    one: true,
    two: false
  });

  return (
    <div className="w-full flex items-center justify-between border border-ui-brand-primary rounded-3xl">
      <button
        className={clsx(
          "px-4 py-2 rounded-3xl w-full",
          input.one ? "bg-ui-brand-primary" : "bg-transparent"
        )}
        onClick={() => setInput({ one: true, two: false })}
      >
        1 lens
      </button>
      <button
        className={clsx(
          "px-4 py-2 rounded-3xl w-full",
          input.two ? "bg-ui-brand-primary" : "bg-transparent"
        )}
        onClick={() => setInput({ one: false, two: true })}
      >
        2 lens kit
      </button>
    </div>
  );
}

export default Switch;
