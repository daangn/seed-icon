import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconTalkingupRegular = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.44276 8.09647C3.89176 9.36978 2.33953 11.0627 2.1252 13.6993C2.1086 13.8461 2.1001 13.9951 2.1001 14.1459L2.10413 14.3255C2.20595 16.5894 4.22468 18.3959 6.7001 18.3959C9.24061 18.3959 11.3001 16.4932 11.3001 14.1459C11.3001 11.7987 9.24061 9.89594 6.7001 9.89594C6.40145 9.89594 6.10945 9.92224 5.82666 9.97246C7.40316 8.16348 9.44822 6.83895 10.795 6.17182C10.9699 6.08519 11.0594 5.88735 11.0045 5.70005C10.9438 5.49314 10.7277 5.37329 10.5218 5.43709C8.8455 5.95632 6.99152 6.82499 5.44276 8.09647ZM3.72871 13.788C3.70979 13.9064 3.7001 14.026 3.7001 14.1459C3.7001 15.4926 4.92166 16.7959 6.7001 16.7959C8.47853 16.7959 9.7001 15.4926 9.7001 14.1459C9.7001 12.7993 8.47853 11.4959 6.7001 11.4959C5.33168 11.4959 4.29296 12.2676 3.88674 13.2369C3.82696 13.4181 3.77408 13.6018 3.72871 13.788ZM16.0428 8.27591C14.4918 9.54922 12.9395 11.2422 12.7252 13.8787C12.7086 14.0255 12.7001 14.1745 12.7001 14.3254L12.7041 14.5049C12.806 16.7689 14.8247 18.5754 17.3001 18.5754C19.8406 18.5754 21.9001 16.6726 21.9001 14.3254C21.9001 11.9782 19.8406 10.0754 17.3001 10.0754C17.0014 10.0754 16.7094 10.1017 16.4267 10.1519C18.0032 8.34292 20.0482 7.0184 21.395 6.35127C21.5699 6.26463 21.6594 6.06679 21.6045 5.87949C21.5438 5.67259 21.3277 5.55274 21.1218 5.61653C19.4455 6.13577 17.5915 7.00443 16.0428 8.27591ZM14.3287 13.9674C14.3098 14.0858 14.3001 14.2054 14.3001 14.3254C14.3001 15.6721 15.5217 16.9754 17.3001 16.9754C19.0785 16.9754 20.3001 15.6721 20.3001 14.3254C20.3001 12.9787 19.0785 11.6754 17.3001 11.6754C15.9317 11.6754 14.893 12.447 14.4867 13.4163C14.427 13.5975 14.3741 13.7813 14.3287 13.9674Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconTalkingupRegular);
export default ForwardRef;
