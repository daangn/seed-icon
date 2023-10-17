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
          d="M9.8 10.4002C9.8 11.1734 9.1732 11.8002 8.4 11.8002C7.6268 11.8002 7 11.1734 7 10.4002C7 9.62698 7.6268 9.00018 8.4 9.00018C9.1732 9.00018 9.8 9.62698 9.8 10.4002Z"
          fill="currentColor"
        />
        <path
          d="M15.6002 11.8002C16.3734 11.8002 17.0002 11.1734 17.0002 10.4002C17.0002 9.62698 16.3734 9.00018 15.6002 9.00018C14.827 9.00018 14.2002 9.62698 14.2002 10.4002C14.2002 11.1734 14.827 11.8002 15.6002 11.8002Z"
          fill="currentColor"
        />
        <path
          d="M8.74211 13.7016C8.57721 13.2917 8.11124 13.0931 7.70134 13.258C7.29144 13.4229 7.09282 13.8888 7.25773 14.2987C7.69347 15.3819 8.52005 16.1326 9.38875 16.6053C10.2518 17.075 11.2078 17.3002 11.9999 17.3002C13.6952 17.3002 15.8824 16.4233 16.7415 14.3002C16.9072 13.8907 16.7096 13.4243 16.3 13.2586C15.8904 13.0928 15.424 13.2905 15.2583 13.7001C14.7174 15.037 13.2647 15.7002 11.9999 15.7002C11.482 15.7002 10.7881 15.5453 10.1536 15.2C9.52479 14.8578 9.00636 14.3584 8.74211 13.7016Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM3.8002 12.0002C3.8002 7.47146 7.47146 3.8002 12.0002 3.8002C16.5289 3.8002 20.2002 7.47146 20.2002 12.0002C20.2002 16.5289 16.5289 20.2002 12.0002 20.2002C7.47146 20.2002 3.8002 16.5289 3.8002 12.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconEmoticonRegular = (
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
export default React.forwardRef(IconEmoticonRegular);
