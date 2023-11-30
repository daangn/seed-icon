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
      <path
        d="M18.3268 22.1989C18.0732 22.3401 17.7631 22.3329 17.5163 22.1801L17.3887 22.1012C17.3068 22.0507 17.189 21.9781 17.0458 21.8902C16.7592 21.7142 16.3712 21.4769 15.9651 21.2315C15.2983 20.8284 14.6333 20.4345 14.2655 20.2336C13.5358 20.3827 12.7775 20.4612 12 20.4612C6.39007 20.4612 1.70005 16.336 1.70005 11.0806C1.70005 5.82515 6.39007 1.69995 12 1.69995C17.61 1.69995 22.3 5.82515 22.3 11.0806C22.3 13.9342 20.904 16.4699 18.7375 18.1773V21.5C18.7375 21.7902 18.5804 22.0577 18.3268 22.1989Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconReplyFill = (
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
export default React.forwardRef(IconReplyFill);
