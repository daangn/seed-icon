import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRedoRegular = (
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
    data-seed-icon-version="0.5.7"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M17.1654 2.43451L21.5656 6.83472C21.878 7.14714 21.878 7.65367 21.5656 7.96609L17.1654 12.3663C16.8529 12.6787 16.3464 12.6787 16.034 12.3663C15.7216 12.0539 15.7216 11.5473 16.034 11.2349L19.0539 8.215H9.68476C6.53674 8.215 3.98476 10.767 3.98476 13.915C3.98476 17.063 6.53674 19.615 9.68476 19.615H15.4999C15.9418 19.615 16.2999 19.9732 16.2999 20.415C16.2999 20.8568 15.9418 21.215 15.4999 21.215H9.68476C5.65308 21.215 2.38477 17.9467 2.38477 13.915C2.38477 9.88332 5.65309 6.615 9.68476 6.615H19.0831L16.034 3.56588C15.7216 3.25346 15.7216 2.74693 16.034 2.43451C16.3464 2.12209 16.8529 2.12209 17.1654 2.43451Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRedoRegular);
export default ForwardRef;
