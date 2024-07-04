/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconFileThin = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4849 7.68672C13.7192 7.92104 13.7192 8.30094 13.4849 8.53525L8.18158 13.8386C7.63485 14.3853 7.63485 15.2717 8.18159 15.8185C8.72832 16.3652 9.61475 16.3652 10.1615 15.8185L15.1112 10.8687C15.3455 10.6344 15.7254 10.6344 15.9598 10.8687C16.1941 11.103 16.1941 11.4829 15.9598 11.7172L11.01 16.667C9.99465 17.6823 8.34842 17.6823 7.33306 16.667C6.31769 15.6516 6.31769 14.0054 7.33306 12.99L12.6364 7.68672C12.8707 7.45241 13.2506 7.45241 13.4849 7.68672Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9899 19.4954C12.7556 19.2611 12.7556 18.8812 12.9899 18.6469L20.061 11.5758C21.3888 10.248 21.3888 8.09527 20.061 6.76749C18.7332 5.4397 16.5804 5.4397 15.2527 6.76748L9.84235 12.1778C9.60804 12.4121 9.22814 12.4121 8.99382 12.1778C8.75951 11.9435 8.75951 11.5636 8.99382 11.3293L14.4041 5.91896C16.2005 4.12254 19.1131 4.12255 20.9095 5.91896C22.7059 7.71537 22.7059 10.6279 20.9095 12.4243L13.8384 19.4954C13.6041 19.7297 13.2242 19.7297 12.9899 19.4954Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4242 3.09053C12.6585 3.32485 12.6585 3.70474 12.4242 3.93906L5.35316 11.0101C3.24433 13.119 3.24433 16.538 5.35316 18.6469C7.46199 20.7557 10.8811 20.7557 12.9899 18.6469L18.163 13.4738C18.3973 13.2395 18.7772 13.2395 19.0115 13.4738C19.2458 13.7081 19.2458 14.088 19.0115 14.3224L13.8384 19.4954C11.261 22.0729 7.08209 22.0729 4.50463 19.4954C1.92717 16.9179 1.92717 12.7391 4.50463 10.1616L11.5757 3.09053C11.81 2.85622 12.1899 2.85622 12.4242 3.09053Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconFileThin);
export default ForwardRef;
