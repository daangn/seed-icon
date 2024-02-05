import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconUndoFill = (
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
        d="M2.29289 6.6931C1.90237 7.08362 1.90237 7.71679 2.29289 8.10731L6.6931 12.5075C7.08362 12.898 7.71679 12.898 8.10731 12.5075C8.49784 12.117 8.49784 11.4838 8.10731 11.0933L5.42911 8.4151H14.3153C17.3528 8.4151 19.8153 10.8775 19.8153 13.9151C19.8153 16.9527 17.3528 19.4151 14.3153 19.4151H8.50009C7.94781 19.4151 7.50009 19.8628 7.50009 20.4151C7.50009 20.9674 7.94781 21.4151 8.50009 21.4151H14.3153C18.4574 21.4151 21.8153 18.0572 21.8153 13.9151C21.8153 9.77296 18.4574 6.4151 14.3153 6.4151H5.39932L8.10731 3.70711C8.49784 3.31658 8.49784 2.68342 8.10731 2.29289C7.71679 1.90237 7.08362 1.90237 6.6931 2.29289L2.29289 6.6931Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconUndoFill);
export default ForwardRef;
