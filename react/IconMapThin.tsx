import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMapThin = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.3307 2.49932C22.4988 2.61039 22.5999 2.79842 22.5999 2.9999V18.1578C22.5999 18.3982 22.4564 18.6154 22.2352 18.7097L15.5685 21.5518C15.4182 21.6159 15.2483 21.6159 15.0979 21.5518L8.62421 18.792L2.1597 20.5782C1.97912 20.6281 1.78558 20.5908 1.6365 20.4773C1.48742 20.3639 1.3999 20.1873 1.3999 19.9999V4.84201C1.3999 4.57218 1.58002 4.33555 1.8401 4.26368L8.50677 2.42158C8.63766 2.38541 8.77695 2.39471 8.90187 2.44797L15.3332 5.18976L21.7646 2.44797C21.9499 2.36895 22.1626 2.38824 22.3307 2.49932ZM14.7332 6.23847L9.26657 3.90794V17.7613L14.7332 20.0919V6.23847ZM15.9332 20.0919L21.3999 17.7613V3.90794L15.9332 6.23847V20.0919ZM8.06657 17.7011V3.78818L2.5999 5.2987V19.2116L8.06657 17.7011Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMapThin);
export default ForwardRef;
