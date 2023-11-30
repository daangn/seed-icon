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
          d="M4.9999 5.3999C5.33127 5.3999 5.5999 5.66853 5.5999 5.9999V17.9999C5.5999 19.3254 6.67442 20.3999 7.9999 20.3999H15.9999C17.3254 20.3999 18.3999 19.3254 18.3999 17.9999V5.9999C18.3999 5.66853 18.6685 5.3999 18.9999 5.3999C19.3313 5.3999 19.5999 5.66853 19.5999 5.9999V17.9999C19.5999 19.9881 17.9881 21.5999 15.9999 21.5999H7.9999C6.01168 21.5999 4.3999 19.9881 4.3999 17.9999V5.9999C4.3999 5.66853 4.66853 5.3999 4.9999 5.3999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.4999 10.3999C8.83127 10.3999 9.0999 10.6685 9.0999 10.9999V15.9999C9.0999 16.3313 8.83127 16.5999 8.4999 16.5999C8.16853 16.5999 7.8999 16.3313 7.8999 15.9999V10.9999C7.8999 10.6685 8.16853 10.3999 8.4999 10.3999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9999 10.3999C12.3313 10.3999 12.5999 10.6685 12.5999 10.9999V15.9999C12.5999 16.3313 12.3313 16.5999 11.9999 16.5999C11.6685 16.5999 11.3999 16.3313 11.3999 15.9999V10.9999C11.3999 10.6685 11.6685 10.3999 11.9999 10.3999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4999 10.3999C15.8313 10.3999 16.0999 10.6685 16.0999 10.9999V15.9999C16.0999 16.3313 15.8313 16.5999 15.4999 16.5999C15.1685 16.5999 14.8999 16.3313 14.8999 15.9999V10.9999C14.8999 10.6685 15.1685 10.3999 15.4999 10.3999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.3999 5.9999C2.3999 5.66853 2.66853 5.3999 2.9999 5.3999H20.9999C21.3313 5.3999 21.5999 5.66853 21.5999 5.9999C21.5999 6.33127 21.3313 6.5999 20.9999 6.5999H2.9999C2.66853 6.5999 2.3999 6.33127 2.3999 5.9999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.4307 2.81017C8.51236 2.56516 8.74165 2.3999 8.99991 2.3999H14.9999C15.2582 2.3999 15.4874 2.56516 15.5691 2.81017L16.5691 5.81017C16.6301 5.99313 16.5994 6.19427 16.4867 6.35073C16.3739 6.50719 16.1928 6.5999 15.9999 6.5999H7.99991C7.80704 6.5999 7.62593 6.50719 7.51316 6.35073C7.40039 6.19427 7.36971 5.99313 7.4307 5.81017L8.4307 2.81017ZM9.43236 3.5999L8.83236 5.3999H15.1675L14.5675 3.5999H9.43236Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconTrashThin = (
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
export default React.forwardRef(IconTrashThin);
