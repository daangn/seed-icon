import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconEmoticonBadRegular = (
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
    data-seed-icon-version="0.5.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.51922 16.6397C8.87268 16.9048 9.37412 16.8332 9.63922 16.4797C9.84313 16.2078 10.5856 15.2997 11.9992 15.2997C13.4128 15.2997 14.1553 16.2078 14.3592 16.4797C14.6243 16.8332 15.1258 16.9048 15.4792 16.6397C15.8327 16.3746 15.9043 15.8732 15.6392 15.5197C15.3431 15.1249 14.1856 13.6997 11.9992 13.6997C9.81279 13.6997 8.65531 15.1249 8.35922 15.5197C8.09412 15.8732 8.16576 16.3746 8.51922 16.6397Z"
      fill="currentColor"
    />
    <path
      d="M9.79922 10.3997C9.79922 11.1729 9.17242 11.7997 8.39922 11.7997C7.62602 11.7997 6.99922 11.1729 6.99922 10.3997C6.99922 9.62651 7.62602 8.99971 8.39922 8.99971C9.17242 8.99971 9.79922 9.62651 9.79922 10.3997Z"
      fill="currentColor"
    />
    <path
      d="M16.9994 10.3997C16.9994 11.1729 16.3726 11.7997 15.5994 11.7997C14.8262 11.7997 14.1994 11.1729 14.1994 10.3997C14.1994 9.62651 14.8262 8.99971 15.5994 8.99971C16.3726 8.99971 16.9994 9.62651 16.9994 10.3997Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9992 3.79971C7.47048 3.79971 3.79922 7.47097 3.79922 11.9997C3.79922 16.5284 7.47048 20.1997 11.9992 20.1997C16.528 20.1997 20.1992 16.5284 20.1992 11.9997C20.1992 7.47097 16.528 3.79971 11.9992 3.79971ZM2.19922 11.9997C2.19922 6.58732 6.58683 2.19971 11.9992 2.19971C17.4116 2.19971 21.7992 6.58732 21.7992 11.9997C21.7992 17.4121 17.4116 21.7997 11.9992 21.7997C6.58683 21.7997 2.19922 17.4121 2.19922 11.9997Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(IconEmoticonBadRegular);
export default ForwardRef;
