/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoneyYenFill = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.2002 12.0002C1.2002 6.03552 6.03552 1.2002 12.0002 1.2002C17.9649 1.2002 22.8002 6.03552 22.8002 12.0002C22.8002 17.9649 17.9649 22.8002 12.0002 22.8002C6.03552 22.8002 1.2002 17.9649 1.2002 12.0002ZM8.04367 6.2829C8.43972 6.03087 8.96509 6.14762 9.21712 6.54367L12 10.9168L14.7829 6.54367C15.0349 6.14762 15.5603 6.03087 15.9564 6.2829C16.3524 6.53493 16.4692 7.0603 16.2171 7.45635L13.5485 11.6499H14.9999C15.4693 11.6499 15.8499 12.0305 15.8499 12.4999C15.8499 12.9693 15.4693 13.3499 14.9999 13.3499H12.85V14.1499H14.9999C15.4693 14.1499 15.8499 14.5305 15.8499 14.9999C15.8499 15.4693 15.4693 15.8499 14.9999 15.8499H12.85V18C12.85 18.4695 12.4695 18.85 12 18.85C11.5306 18.85 11.15 18.4695 11.15 18V15.8499H8.9999C8.53046 15.8499 8.1499 15.4693 8.1499 14.9999C8.1499 14.5305 8.53046 14.1499 8.9999 14.1499H11.15V13.3499H8.9999C8.53046 13.3499 8.1499 12.9693 8.1499 12.4999C8.1499 12.0305 8.53046 11.6499 8.9999 11.6499H10.4515L7.7829 7.45635C7.53087 7.0603 7.64762 6.53493 8.04367 6.2829Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoneyYenFill);
export default ForwardRef;
