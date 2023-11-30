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
          d="M14.0667 17.9134C14.0667 17.4716 14.4248 17.1134 14.8667 17.1134H17.5333C17.9751 17.1134 18.3333 17.4716 18.3333 17.9134C18.3333 18.3552 17.9751 18.7134 17.5333 18.7134H14.8667C14.4248 18.7134 14.0667 18.3552 14.0667 17.9134Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.79995 2.58003C8.79995 2.1382 8.44178 1.78003 7.99995 1.78003C7.55812 1.78003 7.19995 2.1382 7.19995 2.58003V3.28003H2.99995C2.55812 3.28003 2.19995 3.6382 2.19995 4.08003V19.23C2.19995 20.8869 3.5431 22.23 5.19995 22.23H18.8C20.4568 22.23 21.8 20.8869 21.8 19.23V4.08003C21.8 3.6382 21.4418 3.28003 21 3.28003H16.8V2.58003C16.8 2.1382 16.4418 1.78003 16 1.78003C15.5581 1.78003 15.2 2.1382 15.2 2.58003V3.28003H8.79995V2.58003ZM15.2 5.58003V4.88003H8.79995V5.58003C8.79995 6.02186 8.44178 6.38003 7.99995 6.38003C7.55812 6.38003 7.19995 6.02186 7.19995 5.58003V4.88003H3.79995V7.28003H20.2V4.88003H16.8V5.58003C16.8 6.02186 16.4418 6.38003 16 6.38003C15.5581 6.38003 15.2 6.02186 15.2 5.58003ZM20.2 8.88003H3.79995V19.23C3.79995 20.0032 4.42675 20.63 5.19995 20.63H18.8C19.5732 20.63 20.2 20.0032 20.2 19.23V8.88003Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconCalendarRegular = (
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
export default React.forwardRef(IconCalendarRegular);
