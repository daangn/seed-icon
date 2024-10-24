/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHelpThin = (
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
    data-seed-icon-version="0.7.3"
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
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.33333C7.21353 3.33333 3.33333 7.21353 3.33333 12C3.33333 16.7865 7.21353 20.6667 12 20.6667C16.7865 20.6667 20.6667 16.7865 20.6667 12C20.6667 7.21353 16.7865 3.33333 12 3.33333Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2133 8.20951C14.8352 8.78181 15.2032 9.63022 15.0744 10.6523C14.9415 11.7076 14.1594 12.2441 13.6193 12.6144C13.5779 12.6428 13.5379 12.6703 13.4997 12.6969C12.9098 13.1082 12.5896 13.3935 12.5896 14C12.5896 14.3314 12.3209 14.6 11.9896 14.6C11.6582 14.6 11.3896 14.3314 11.3896 14C11.3896 12.7352 12.2104 12.1329 12.8134 11.7125L12.823 11.7058C13.4739 11.252 13.8198 11.0109 13.8838 10.5023C13.9626 9.877 13.7456 9.4099 13.4007 9.09253C13.0414 8.76194 12.5252 8.58008 12.015 8.60173C10.9532 8.64678 10.1 9.45536 10.1 10.4014C10.1 10.7327 9.83137 11.0014 9.5 11.0014C9.16863 11.0014 8.9 10.7327 8.9 10.4014C8.9 8.69237 10.387 7.46972 11.9641 7.40281C12.7734 7.36847 13.6057 7.65044 14.2133 8.20951Z"
          fill="currentColor"
        />
        <path
          d="M12.9604 16.3999C12.9604 16.9301 12.5306 17.3599 12.0004 17.3599C11.4702 17.3599 11.0404 16.9301 11.0404 16.3999C11.0404 15.8697 11.4702 15.4399 12.0004 15.4399C12.5306 15.4399 12.9604 15.8697 12.9604 16.3999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHelpThin);
export default ForwardRef;
