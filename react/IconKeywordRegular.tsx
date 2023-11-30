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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9375 7.19349C15.8347 6.09072 14.0468 6.09072 12.944 7.19349C11.8413 8.29626 11.8413 10.0842 12.944 11.187C14.0468 12.2897 15.8347 12.2897 16.9375 11.187C18.0403 10.0842 18.0403 8.29626 16.9375 7.19349ZM14.0556 8.30503C14.5445 7.81615 15.3371 7.81615 15.826 8.30503C16.3148 8.79391 16.3148 9.58654 15.826 10.0754C15.3371 10.5643 14.5445 10.5643 14.0556 10.0754C13.5667 9.58654 13.5667 8.79391 14.0556 8.30503Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4447 2.80579C17.7614 2.12251 16.7697 1.84783 15.8323 2.08219L11.6757 3.12133C11.192 3.24225 10.7503 3.49237 10.3977 3.84492L2.80573 11.4369C1.73142 12.5112 1.73142 14.253 2.80573 15.3273L8.67267 21.1943C9.74697 22.2686 11.4888 22.2686 12.5631 21.1943L20.1551 13.6023C20.5076 13.2497 20.7577 12.808 20.8787 12.3243L21.9178 8.16773C22.1522 7.23028 21.8775 6.2386 21.1942 5.55532L18.4447 2.80579ZM16.2135 3.60722C16.6153 3.50678 17.0403 3.6245 17.3331 3.91734L20.0827 6.66687C20.3755 6.9597 20.4932 7.38471 20.3928 7.78647L19.3536 11.943C19.3018 12.1503 19.1946 12.3396 19.0435 12.4907L11.4515 20.0827C10.9911 20.5431 10.2446 20.5431 9.78421 20.0827L3.91728 14.2158C3.45686 13.7554 3.45686 13.0089 3.91728 12.5485L11.5093 4.95647C11.6604 4.80537 11.8497 4.69818 12.057 4.64636L16.2135 3.60722Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconKeywordRegular = (
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
export default React.forwardRef(IconKeywordRegular);
