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
    data-seed-icon-version="0.3.15"
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.2002 13.0002C7.2002 10.3492 9.34923 8.2002 12.0002 8.2002C14.6512 8.2002 16.8002 10.3492 16.8002 13.0002C16.8002 15.6512 14.6512 17.8002 12.0002 17.8002C9.34923 17.8002 7.2002 15.6512 7.2002 13.0002ZM12.0002 9.8002C10.2329 9.8002 8.8002 11.2329 8.8002 13.0002C8.8002 14.7675 10.2329 16.2002 12.0002 16.2002C13.7675 16.2002 15.2002 14.7675 15.2002 13.0002C15.2002 11.2329 13.7675 9.8002 12.0002 9.8002Z"
          fill="currentColor"
        />
        <path
          d="M11.0002 5.2002C10.5584 5.2002 10.2002 5.55837 10.2002 6.0002C10.2002 6.44202 10.5584 6.8002 11.0002 6.8002H13.0002C13.442 6.8002 13.8002 6.44202 13.8002 6.0002C13.8002 5.55837 13.442 5.2002 13.0002 5.2002H11.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.83144 2.48455C8.12703 2.28749 8.46021 2.2002 8.8002 2.2002H15.4002C15.9946 2.2002 16.8208 2.50263 17.0627 3.35513L17.7546 5.2002H20.0002C21.542 5.2002 22.8002 6.45837 22.8002 8.0002V18.0002C22.8002 19.542 21.542 20.8002 20.0002 20.8002H4.00019C2.45837 20.8002 1.2002 19.542 1.2002 18.0002V8.0002C1.2002 6.45837 2.45837 5.2002 4.00019 5.2002H6.44579L7.15113 3.3193C7.16095 3.2931 7.17214 3.26744 7.18465 3.24242C7.33211 2.94752 7.54085 2.67828 7.83144 2.48455ZM8.63206 3.92696L7.74926 6.28109C7.63217 6.59334 7.33367 6.8002 7.0002 6.8002H4.00019C3.34202 6.8002 2.8002 7.34202 2.8002 8.0002V18.0002C2.8002 18.6584 3.34202 19.2002 4.00019 19.2002H20.0002C20.6584 19.2002 21.2002 18.6584 21.2002 18.0002V8.0002C21.2002 7.34202 20.6584 6.8002 20.0002 6.8002H17.2002C16.8667 6.8002 16.5682 6.59334 16.4511 6.28109L15.5511 3.88109C15.5443 3.86287 15.5381 3.84441 15.5327 3.82575C15.5235 3.82138 15.5103 3.81617 15.4925 3.81152C15.466 3.80456 15.4344 3.8002 15.4002 3.8002H8.8002C8.74208 3.8002 8.72446 3.81211 8.71941 3.81553C8.711 3.82114 8.67668 3.84662 8.63206 3.92696Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconCameraRegular = (
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
export default React.forwardRef(IconCameraRegular);
