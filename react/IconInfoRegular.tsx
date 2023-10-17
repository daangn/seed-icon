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
          d="M13.8214 15.7009C13.631 15.6056 13.4133 15.6737 13.2773 15.8641C13.2529 15.8982 13.2194 15.9516 13.1782 16.017C12.9897 16.3168 12.6416 16.8704 12.2843 16.9933C12.0258 17.0749 11.7674 16.8844 11.9714 15.7961C12.1754 14.7077 12.9644 10.4904 12.9916 10.3271C13.0188 10.1639 12.9508 10.0823 12.91 10.0414C12.8556 9.98703 12.7604 9.93261 12.5971 9.97342C12.5699 9.98703 11.985 10.1639 11.4001 10.3407L10.2846 10.6945C10.0398 10.7625 9.91734 10.9665 9.97175 11.1842C9.99895 11.293 10.067 11.4019 10.1622 11.4563C10.2574 11.5243 10.3662 11.5379 10.4751 11.5107C10.5295 11.4971 10.6383 11.4699 10.7607 11.4291C10.8015 11.4155 10.8423 11.4053 10.8832 11.3951C10.924 11.3849 10.9648 11.3747 11.0056 11.3611C10.8423 12.2181 10.1894 15.4696 10.1894 15.4696C10.0534 16.245 10.0126 16.7756 10.0942 17.1157C10.1894 17.5102 10.4206 17.7959 10.7879 17.9728C10.992 18.0544 11.2096 18.1088 11.4409 18.1224C11.6177 18.1224 11.7946 18.1088 11.9986 18.068C12.7604 17.9184 13.2773 17.3606 13.5222 17.0341C13.7534 16.7348 13.903 16.4355 13.9983 16.2314C14.0935 16.0274 14.0255 15.8097 13.8214 15.7009Z"
          fill="currentColor"
        />
        <path
          d="M12.0506 8.93876C12.7551 8.93876 13.3261 8.3677 13.3261 7.66325C13.3261 6.95881 12.7551 6.38774 12.0506 6.38774C11.3462 6.38774 10.7751 6.95881 10.7751 7.66325C10.7751 8.3677 11.3462 8.93876 12.0506 8.93876Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.63265C7.37884 3.63265 3.63265 7.37884 3.63265 12C3.63265 16.6212 7.37884 20.3673 12 20.3673C16.6212 20.3673 20.3673 16.6212 20.3673 12C20.3673 7.37884 16.6212 3.63265 12 3.63265Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconInfoRegular = (
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
export default React.forwardRef(IconInfoRegular);
