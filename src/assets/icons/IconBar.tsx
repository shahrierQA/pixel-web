import { SVGProps } from "react";

export const IconBar = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={19}
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={24} height={3} fill="#FCF6F6" />
      <rect y={8} width={24} height={3} fill="#FCF6F6" />
      <rect y={16} width={24} height={3} fill="#FCF6F6" />
    </svg>
  );
};
