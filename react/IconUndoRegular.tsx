import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconUndoRegular = (
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
    data-seed-icon-version="0.5.6"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M2.43427 6.83447C2.12185 7.14689 2.12185 7.65342 2.43427 7.96584L6.83447 12.3661C7.14689 12.6785 7.65342 12.6785 7.96584 12.3661C8.27826 12.0536 8.27826 11.5471 7.96584 11.2347L4.94617 8.215H14.3151C17.4631 8.215 20.0151 10.767 20.0151 13.915C20.0151 17.063 17.4631 19.615 14.3151 19.615H8.49988C8.05805 19.615 7.69988 19.9732 7.69988 20.415C7.69988 20.8568 8.05805 21.215 8.49988 21.215H14.3151C18.3467 21.215 21.6151 17.9467 21.6151 13.915C21.6151 9.88332 18.3467 6.615 14.3151 6.615H4.91648L7.96584 3.56564C8.27826 3.25322 8.27826 2.74669 7.96584 2.43427C7.65342 2.12185 7.14689 2.12185 6.83447 2.43427L2.43427 6.83447Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconUndoRegular);
export default ForwardRef;
