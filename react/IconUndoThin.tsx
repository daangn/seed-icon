import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconUndoThin = (
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
        d="M2.57564 6.97585C2.34132 7.21016 2.34132 7.59006 2.57564 7.82437L6.97585 12.2246C7.21016 12.4589 7.59006 12.4589 7.82437 12.2246C8.05869 11.9903 8.05869 11.6104 7.82437 11.3761L4.46323 8.0149H14.3151C17.5736 8.0149 20.2151 10.6564 20.2151 13.9149C20.2151 17.1734 17.5736 19.8149 14.3151 19.8149H8.49991C8.16854 19.8149 7.89991 20.0835 7.89991 20.4149C7.89991 20.7463 8.16854 21.0149 8.49991 21.0149H14.3151C18.2363 21.0149 21.4151 17.8361 21.4151 13.9149C21.4151 9.99368 18.2363 6.8149 14.3151 6.8149H4.43364L7.82437 3.42417C8.05869 3.18985 8.05869 2.80995 7.82437 2.57564C7.59006 2.34132 7.21016 2.34132 6.97585 2.57564L2.57564 6.97585Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconUndoThin);
export default ForwardRef;
