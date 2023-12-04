import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCallDeclinedFill = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M17.1429 21C9.33197 21 3 14.668 3 6.85714C3 6.07911 3 4.66116 3.44713 3.45375C3.55236 3.16959 3.83427 3 4.13728 3H8.66396C9.10579 3 9.46396 3.35817 9.46396 3.8V7.72331C9.46396 7.99168 9.35609 8.24878 9.16461 8.43681L7.5 10.0714C7.71429 10.7143 8.32053 12.4813 10.1068 14.2675C11.5348 15.6955 13.2857 16.2857 13.9286 16.5L15.5642 14.8643C15.7518 14.6768 16.0061 14.5714 16.2714 14.5714H20.2C20.6418 14.5714 21 14.9296 21 15.3714V19.8627C21 20.1657 20.8304 20.4476 20.5463 20.5529C19.3388 21 17.9209 21 17.1429 21Z"
          fill="currentColor"
        />
        <path
          d="M14.4345 3.43433C14.7469 3.12191 15.2535 3.12191 15.5659 3.43433L17.5002 5.36864L19.4345 3.43433C19.7469 3.12191 20.2535 3.12191 20.5659 3.43433C20.8783 3.74675 20.8783 4.25328 20.5659 4.5657L18.6316 6.50001L20.5659 8.43433C20.8783 8.74675 20.8783 9.25328 20.5659 9.5657C20.2535 9.87812 19.7469 9.87812 19.4345 9.5657L17.5002 7.63138L15.5659 9.5657C15.2535 9.87812 14.7469 9.87812 14.4345 9.5657C14.1221 9.25328 14.1221 8.74675 14.4345 8.43433L16.3688 6.50001L14.4345 4.5657C14.1221 4.25328 14.1221 3.74675 14.4345 3.43433Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCallDeclinedFill);
export default ForwardRef;
