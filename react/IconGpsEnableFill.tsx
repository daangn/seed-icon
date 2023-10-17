import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size?: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.11"
    width="100%"
    height="100%"
    {...props}
  >
    <g>
      <g>
        <path
          d="M12.9501 1.54998C12.9501 1.02531 12.5248 0.599976 12.0001 0.599976C11.4754 0.599976 11.0501 1.02531 11.0501 1.54998V2.54688C6.5619 2.9925 2.99262 6.56178 2.547 11.05H1.5501C1.02543 11.05 0.600098 11.4753 0.600098 12C0.600098 12.5246 1.02543 12.95 1.5501 12.95H2.547C2.99262 17.4382 6.5619 21.0075 11.0501 21.4531V22.45C11.0501 22.9746 11.4754 23.4 12.0001 23.4C12.5248 23.4 12.9501 22.9746 12.9501 22.45V21.4531C13.3409 21.4143 13.7247 21.3518 14.1001 21.2671V19.3061C13.4331 19.4975 12.7286 19.6 12.0001 19.6C7.80273 19.6 4.4001 16.1973 4.4001 12C4.4001 7.80261 7.80273 4.39998 12.0001 4.39998C15.3588 4.39998 18.2086 6.57871 19.2134 9.59998H21.1943C20.2082 5.81172 16.9428 2.9433 12.9501 2.54688V1.54998Z"
          fill="currentColor"
        />
        <path
          d="M20.7972 12.9656C21.5412 13.6521 21.9791 14.6695 21.8247 15.881C21.6617 17.1594 20.7063 17.812 20.1123 18.2178C20.0645 18.2505 20.019 18.2816 19.9764 18.3112C19.324 18.7663 19.0659 19.0219 19.0659 19.5666C19.0659 20.0636 18.663 20.4666 18.1659 20.4666C17.6689 20.4666 17.2659 20.0636 17.2659 19.5666C17.2659 18.0347 18.2745 17.3038 18.9467 16.8349C19.7006 16.3091 19.9824 16.0984 20.0391 15.6534C20.1175 15.0386 19.9067 14.5931 19.5766 14.2886C19.2251 13.9643 18.7123 13.7805 18.2031 13.8016C17.1241 13.8462 16.3 14.6663 16.3 15.568C16.3 16.0651 15.8971 16.468 15.4 16.468C14.9029 16.468 14.5 16.0651 14.5 15.568C14.5 13.5254 16.2711 12.08 18.1287 12.0031C19.0879 11.9635 20.0745 12.2989 20.7972 12.9656Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1774 23.0498C18.7205 23.0498 19.1607 22.6095 19.1607 22.0664C19.1607 21.5234 18.7205 21.0831 18.1774 21.0831C17.6343 21.0831 17.1941 21.5234 17.1941 22.0664C17.1941 22.6095 17.6343 23.0498 18.1774 23.0498Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconGpsEnableFill = (
  { size = 24, className }: Props,
  ref: React.ForwardedRef<HTMLSpanElement>
) => {
  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
      }}
    >
      <SVG />
    </span>
  );
};
export default React.forwardRef(IconGpsEnableFill);
