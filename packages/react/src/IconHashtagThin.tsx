/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconHashtagThin = (
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
    data-seed-icon-version="0.7.2"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5917 3.09864C10.6462 2.77177 10.4254 2.46264 10.0985 2.40816C9.77165 2.35368 9.46251 2.57449 9.40804 2.90136L8.65826 7.39999H3.9999C3.66853 7.39999 3.3999 7.66862 3.3999 7.99999C3.3999 8.33136 3.66853 8.59999 3.9999 8.59999H8.45826L7.4916 14.4H2.9999C2.66853 14.4 2.3999 14.6686 2.3999 15C2.3999 15.3314 2.66853 15.6 2.9999 15.6H7.2916L6.40804 20.9014C6.35356 21.2282 6.57437 21.5374 6.90123 21.5918C7.2281 21.6463 7.53723 21.4255 7.59171 21.0986L8.50815 15.6H14.2916L13.408 20.9014C13.3536 21.2282 13.5744 21.5374 13.9012 21.5918C14.2281 21.6463 14.5372 21.4255 14.5917 21.0986L15.5082 15.6H19.9999C20.3313 15.6 20.5999 15.3314 20.5999 15C20.5999 14.6686 20.3313 14.4 19.9999 14.4H15.7082L16.6748 8.59999H20.9999C21.3313 8.59999 21.5999 8.33136 21.5999 7.99999C21.5999 7.66862 21.3313 7.39999 20.9999 7.39999H16.8748L17.5917 3.09864C17.6462 2.77177 17.4254 2.46264 17.0985 2.40816C16.7717 2.35368 16.4625 2.57449 16.408 2.90136L15.6583 7.39999H9.87482L10.5917 3.09864ZM14.4916 14.4L15.4583 8.59999H9.67482L8.70815 14.4H14.4916Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconHashtagThin);
export default ForwardRef;
