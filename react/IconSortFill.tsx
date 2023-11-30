import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.15"
    {...props}
  >
    <g>
      <g>
        <path
          d="M11.2929 13.9599C11.6834 13.5694 12.3166 13.5694 12.7071 13.9599C13.0976 14.3504 13.0976 14.9836 12.7071 15.3741L8.70711 19.3741C8.31658 19.7646 7.68342 19.7646 7.29289 19.3741L3.29289 15.3741C2.90237 14.9836 2.90237 14.3504 3.29289 13.9599C3.68342 13.5694 4.31658 13.5694 4.70711 13.9599L7 16.2528L7 5.3335C7 4.78121 7.44771 4.3335 8 4.3335C8.55228 4.3335 9 4.78121 9 5.3335L9 16.2528L11.2929 13.9599Z"
          fill="currentColor"
        />
        <path
          d="M12.7071 10.0406C12.3166 10.4311 11.6834 10.4311 11.2929 10.0406C10.9024 9.65008 10.9024 9.01692 11.2929 8.62639L15.2929 4.62639C15.349 4.57031 15.411 4.52158 15.4776 4.48082C15.5823 4.41649 15.6999 4.37093 15.8255 4.34883C15.8827 4.33869 15.9411 4.3335 16 4.3335C16.0589 4.3335 16.1173 4.33869 16.1745 4.34883C16.3001 4.37093 16.4177 4.41649 16.5224 4.48082C16.589 4.52158 16.651 4.57031 16.7071 4.62639L20.7071 8.62639C21.0976 9.01692 21.0976 9.65008 20.7071 10.0406C20.3166 10.4311 19.6834 10.4311 19.2929 10.0406L17 7.74771V18.667C17 19.2193 16.5523 19.667 16 19.667C15.4477 19.667 15 19.2193 15 18.667V7.74771L12.7071 10.0406Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconSortFill = (
  { size, className }: Props,
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
export default React.forwardRef(IconSortFill);
