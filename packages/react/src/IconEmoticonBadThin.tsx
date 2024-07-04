/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconEmoticonBadThin = (
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
          d="M8.57023 16.5737C8.84085 16.7767 9.22477 16.7218 9.42773 16.4512C9.64765 16.158 10.4586 15.1649 12.0002 15.1649C13.5419 15.1649 14.3528 16.158 14.5727 16.4512C14.7757 16.7218 15.1596 16.7767 15.4302 16.5737C15.7009 16.3707 15.7557 15.9868 15.5527 15.7162C15.2622 15.3289 14.1336 13.9399 12.0002 13.9399C9.86687 13.9399 8.73823 15.3289 8.44773 15.7162C8.24477 15.9868 8.29961 16.3707 8.57023 16.5737Z"
          fill="currentColor"
        />
        <path
          d="M9.7002 10.45C9.7002 11.1404 9.14055 11.7 8.4502 11.7C7.75984 11.7 7.2002 11.1404 7.2002 10.45C7.2002 9.75964 7.75984 9.2 8.4502 9.2C9.14055 9.2 9.7002 9.75964 9.7002 10.45Z"
          fill="currentColor"
        />
        <path
          d="M16.8 10.4502C16.8 11.1406 16.2404 11.7002 15.55 11.7002C14.8596 11.7002 14.3 11.1406 14.3 10.4502C14.3 9.75984 14.8596 9.2002 15.55 9.2002C16.2404 9.2002 16.8 9.75984 16.8 10.4502Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0002 3.4252C7.26435 3.4252 3.4252 7.26435 3.4252 12.0002C3.4252 16.736 7.26435 20.5752 12.0002 20.5752C16.736 20.5752 20.5752 16.736 20.5752 12.0002C20.5752 7.26435 16.736 3.4252 12.0002 3.4252ZM2.2002 12.0002C2.2002 6.5878 6.5878 2.2002 12.0002 2.2002C17.4126 2.2002 21.8002 6.5878 21.8002 12.0002C21.8002 17.4126 17.4126 21.8002 12.0002 21.8002C6.5878 21.8002 2.2002 17.4126 2.2002 12.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconEmoticonBadThin);
export default ForwardRef;
