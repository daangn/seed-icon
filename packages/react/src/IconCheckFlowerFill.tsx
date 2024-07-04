/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCheckFlowerFill = (
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
    data-seed-icon-version="0.7.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.3315 3.14363C9.05341 1.86444 10.425 1 12 1C13.575 1 14.9465 1.8644 15.6685 3.14343C17.0834 2.74951 18.6645 3.10824 19.778 4.22177C20.8918 5.33552 21.2503 6.91652 20.8564 8.3315C22.1356 9.05341 23 10.425 23 12C23 13.575 22.1356 14.9465 20.8566 15.6685C21.2505 17.0834 20.8918 18.6645 19.7782 19.778C18.6645 20.8918 17.0835 21.2503 15.6685 20.8564C14.9466 22.1356 13.575 23 12 23C10.425 23 9.05347 22.1356 8.33155 20.8566C6.9166 21.2505 5.3355 20.8918 4.22197 19.7782C3.10822 18.6645 2.74968 17.0835 3.14364 15.6685C1.86444 14.9466 1 13.575 1 12C1 10.425 1.8644 9.05347 3.14343 8.33155C2.74951 6.9166 3.10824 5.3355 4.22177 4.22197C5.33552 3.10822 6.91652 2.74968 8.3315 3.14363ZM16.01 8.3275C15.5892 8.02407 15.0021 8.1192 14.6987 8.53999L11.14 13.4751L9.23061 11.3997C8.87937 11.0179 8.28513 10.9931 7.90335 11.3444C7.52157 11.6956 7.49681 12.2898 7.84805 12.6716L10.5371 15.5945C10.7282 15.8022 11.0025 15.9129 11.2842 15.8961C11.5659 15.8794 11.8252 15.7368 11.9902 15.5079L16.2225 9.6388C16.5259 9.21802 16.4308 8.63093 16.01 8.3275Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCheckFlowerFill);
export default ForwardRef;
