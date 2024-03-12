import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarCruiseControlFill = (
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
    data-seed-icon-version="0.5.8"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M21.9498 13.2896C21.9089 7.84486 17.4116 3.48891 11.9263 3.53007C6.44089 3.57124 2.00947 7.99418 2.05033 13.439C2.07002 16.063 3.1273 18.4522 4.84434 20.1953C5.0244 20.3781 5.27074 20.4802 5.52731 20.4786C5.78388 20.4769 6.02887 20.3715 6.20653 20.1864L7.51633 18.8216C7.87963 18.4431 7.86727 17.8417 7.48873 17.4784C7.11019 17.1151 6.50881 17.1275 6.14551 17.506L5.55476 18.1216C4.76283 17.0854 4.22572 15.8462 4.0311 14.4977L4.93351 14.4977C5.45819 14.4977 5.88351 14.0724 5.88351 13.5477C5.88351 13.0231 5.45818 12.5977 4.93351 12.5977H3.98723C4.13426 11.0885 4.7108 9.69994 5.59708 8.55482L6.26176 9.2195C6.63276 9.5905 7.23427 9.5905 7.60527 9.2195C7.97626 8.8485 7.97626 8.24699 7.60527 7.876L6.92987 7.2006C8.0643 6.29258 9.45552 5.68225 10.9835 5.49258L10.9835 6.54775C10.9835 7.07242 11.4088 7.49775 11.9335 7.49775C12.4582 7.49775 12.8835 7.07242 12.8835 6.54775V5.47662C14.4288 5.64208 15.8417 6.23826 16.9971 7.1407L16.2618 7.876C15.8908 8.24699 15.8908 8.8485 16.2618 9.2195C16.6328 9.5905 17.2343 9.5905 17.6053 9.2195L18.3458 8.47897C19.2748 9.65031 19.8768 11.0853 20.018 12.651H18.9257C18.401 12.651 17.9757 13.0763 17.9757 13.601C17.9757 14.1256 18.401 14.551 18.9257 14.551H19.9603C19.7655 15.8281 19.2611 17.0086 18.5215 18.0136L17.903 17.4121C17.5268 17.0463 16.9254 17.0547 16.5596 17.4308C16.1938 17.807 16.2022 18.4084 16.5784 18.7742L17.9308 20.0893C18.1133 20.2668 18.3594 20.3636 18.6139 20.3581C18.8683 20.3525 19.11 20.245 19.2845 20.0597C20.9553 18.2865 21.9694 15.8993 21.9498 13.2896Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.60527 9.876C9.23427 9.505 8.63276 9.505 8.26176 9.876C7.89077 10.247 7.89076 10.8485 8.26176 11.2195L9.71779 12.6755C9.58978 12.9727 9.51891 13.3002 9.51891 13.6439C9.51891 14.997 10.6158 16.0939 11.9689 16.0939C13.322 16.0939 14.4189 14.997 14.4189 13.6439C14.4189 12.2908 13.322 11.1939 11.9689 11.1939C11.6582 11.1939 11.3607 11.2519 11.0868 11.3576L9.60527 9.876ZM11.4189 13.6439C11.4189 13.3402 11.6652 13.0939 11.9689 13.0939C12.2727 13.0939 12.5189 13.3402 12.5189 13.6439C12.5189 13.9477 12.2727 14.1939 11.9689 14.1939C11.6652 14.1939 11.4189 13.9477 11.4189 13.6439Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarCruiseControlFill);
export default ForwardRef;
