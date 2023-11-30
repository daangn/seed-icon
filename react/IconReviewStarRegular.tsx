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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.69869 8.09934C8.6311 8.23617 8.50045 8.33101 8.34932 8.35295L1.8978 9.28958C1.5172 9.34484 1.36523 9.81214 1.64063 10.0804L6.309 14.6269C6.41836 14.7334 6.46826 14.8868 6.44245 15.0372L5.3404 21.457C5.27538 21.8357 5.67324 22.1245 6.01366 21.9457L11.7841 18.9147C11.9193 18.8437 12.0807 18.8437 12.2159 18.9147L17.9863 21.9457C18.3268 22.1245 18.7246 21.8357 18.6596 21.457L17.5576 15.0372C17.5317 14.8868 17.5816 14.7334 17.691 14.6269L22.3594 10.0804C22.6348 9.81214 22.4828 9.34484 22.1022 9.28958L15.6507 8.35295C15.4995 8.33101 15.3689 8.23617 15.3013 8.09934L12.4161 2.25843C12.2459 1.91386 11.7541 1.91386 11.5839 2.25843L8.69869 8.09934ZM12 5.02878L10.1332 8.80795C9.83227 9.4172 9.25092 9.83883 8.5792 9.93635L4.40786 10.5419L7.42531 13.4806C7.91198 13.9546 8.1344 14.6379 8.01938 15.3079L7.30675 19.4592L11.04 17.4982C11.6411 17.1825 12.3589 17.1825 12.96 17.4982L16.6932 19.4592L15.9806 15.3079C15.8656 14.6379 16.088 13.9546 16.5747 13.4806L19.5921 10.5419L15.4208 9.93635C14.7491 9.83883 14.1677 9.4172 13.8668 8.80795L12 5.02878Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconReviewStarRegular = (
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
export default React.forwardRef(IconReviewStarRegular);
