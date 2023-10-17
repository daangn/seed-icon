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
          d="M10.0404 11.2929C10.4309 11.6834 10.4309 12.3166 10.0404 12.7071C9.64983 13.0976 9.01667 13.0976 8.62614 12.7071L4.62615 8.70711C4.23562 8.31658 4.23562 7.68342 4.62615 7.29289L8.62615 3.29289C9.01667 2.90237 9.64984 2.90237 10.0404 3.29289C10.4309 3.68342 10.4309 4.31658 10.0404 4.70711L7.74747 7L18.6667 7C19.219 7 19.6667 7.44771 19.6667 8C19.6667 8.55228 19.219 9 18.6667 9L7.74746 9L10.0404 11.2929Z"
          fill="currentColor"
        />
        <path
          d="M13.9596 12.7071C13.5691 12.3166 13.5691 11.6834 13.9596 11.2929C14.3502 10.9024 14.9833 10.9024 15.3739 11.2929L19.3739 15.2929C19.4299 15.349 19.4787 15.411 19.5194 15.4776C19.5838 15.5823 19.6293 15.6999 19.6514 15.8255C19.6616 15.8827 19.6667 15.9411 19.6667 16C19.6667 16.0589 19.6616 16.1173 19.6514 16.1745C19.6293 16.3001 19.5838 16.4177 19.5194 16.5224C19.4787 16.589 19.4299 16.651 19.3739 16.7071L15.3739 20.7071C14.9833 21.0976 14.3502 21.0976 13.9596 20.7071C13.5691 20.3166 13.5691 19.6834 13.9596 19.2929L16.2525 17H5.33325C4.78097 17 4.33325 16.5523 4.33325 16C4.33325 15.4477 4.78097 15 5.33325 15H16.2525L13.9596 12.7071Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconConvertFill = (
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
export default React.forwardRef(IconConvertFill);
