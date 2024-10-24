/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoneyYenThin = (
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
          d="M9 11.9C8.66863 11.9 8.4 12.1686 8.4 12.5C8.4 12.8314 8.66863 13.1 9 13.1H11.4V14.4H9C8.66863 14.4 8.4 14.6686 8.4 15C8.4 15.3314 8.66863 15.6 9 15.6H11.4V18C11.4 18.3314 11.6686 18.6 12 18.6C12.3314 18.6 12.6 18.3314 12.6 18V15.6H15C15.3314 15.6 15.6 15.3314 15.6 15C15.6 14.6686 15.3314 14.4 15 14.4H12.6V13.1H15C15.3314 13.1 15.6 12.8314 15.6 12.5C15.6 12.1686 15.3314 11.9 15 11.9H13.093L16.0062 7.32213C16.1841 7.04256 16.1017 6.67171 15.8221 6.4938C15.5426 6.3159 15.1717 6.39831 14.9938 6.67787L12 11.3824L9.0062 6.67787C8.82829 6.39831 8.45744 6.3159 8.17787 6.4938C7.89831 6.67171 7.8159 7.04256 7.9938 7.32213L10.907 11.9H9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.3999 11.9999C1.3999 6.14568 6.14568 1.3999 11.9999 1.3999C17.8541 1.3999 22.5999 6.14568 22.5999 11.9999C22.5999 17.8541 17.8541 22.5999 11.9999 22.5999C6.14568 22.5999 1.3999 17.8541 1.3999 11.9999ZM11.9999 2.5999C6.80843 2.5999 2.5999 6.80843 2.5999 11.9999C2.5999 17.1914 6.80843 21.3999 11.9999 21.3999C17.1914 21.3999 21.3999 17.1914 21.3999 11.9999C21.3999 6.80843 17.1914 2.5999 11.9999 2.5999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoneyYenThin);
export default ForwardRef;
