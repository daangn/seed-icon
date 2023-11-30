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
          d="M14.5 12C15.0501 12 15.5588 11.8223 15.9716 11.5212C15.9904 11.6782 16 11.838 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C12.162 8 12.3218 8.00964 12.4788 8.02836C12.1777 8.44123 12 8.94986 12 9.5C12 10.8807 13.1193 12 14.5 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.76692 17.0979C7.64153 18.366 9.71922 19 12 19C14.2808 19 16.3585 18.366 18.2331 17.0979C19.6611 16.1324 20.7899 14.9163 21.6197 13.4496C22.1268 12.5532 22.1268 11.4468 21.6197 10.5504C20.79 9.08358 19.6611 7.86719 18.2331 6.9012C16.3585 5.63373 14.2808 5 12 5C9.71922 5 7.64153 5.63373 5.76692 6.9012C4.3389 7.86719 3.21003 9.08358 2.38031 10.5504C1.87323 11.4468 1.87322 12.5532 2.38034 13.4496C3.21005 14.9163 4.33891 16.1324 5.76692 17.0979ZM6.63591 8.23417C5.40384 9.06767 4.4462 10.1036 3.74168 11.349C3.51424 11.7511 3.51425 12.2489 3.74167 12.6509C4.4462 13.8963 5.40385 14.9319 6.63591 15.7649C8.24923 16.8562 10.0241 17.4 12 17.4C13.9759 17.4 15.7505 16.8564 17.3638 15.7651C18.5959 14.9321 19.5538 13.8963 20.2583 12.6509C20.4857 12.2489 20.4858 11.7511 20.2583 11.349C19.5537 10.1035 18.596 9.06751 17.3638 8.23397C15.7505 7.14329 13.976 6.6 12 6.6C10.024 6.6 8.24918 7.14349 6.63591 8.23417Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconViewCountRegular = (
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
export default React.forwardRef(IconViewCountRegular);
