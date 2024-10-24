/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconAiThin = (
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
        d="M7.95145 16.6249C7.88449 16.3654 7.74921 16.1285 7.55967 15.939C7.37014 15.7495 7.13328 15.6142 6.87373 15.5472L2.2726 14.3607C2.1941 14.3385 2.12501 14.2912 2.07581 14.2261C2.02662 14.161 2 14.0816 2 14C2 13.9184 2.02662 13.839 2.07581 13.7739C2.12501 13.7088 2.1941 13.6615 2.2726 13.6393L6.87373 12.452C7.13318 12.3851 7.36998 12.25 7.55951 12.0606C7.74904 11.8712 7.88438 11.6345 7.95145 11.3751L9.13792 6.77393C9.15997 6.69512 9.20721 6.62569 9.27241 6.57623C9.33761 6.52677 9.4172 6.5 9.49903 6.5C9.58087 6.5 9.66046 6.52677 9.72566 6.57623C9.79086 6.62569 9.8381 6.69512 9.86015 6.77393L11.0459 11.3751C11.1128 11.6346 11.2481 11.8715 11.4376 12.061C11.6272 12.2505 11.864 12.3858 12.1236 12.4528L16.7247 13.6385C16.8038 13.6603 16.8736 13.7075 16.9233 13.7728C16.9731 13.8381 17 13.9179 17 14C17 14.0821 16.9731 14.1619 16.9233 14.2272C16.8736 14.2925 16.8038 14.3397 16.7247 14.3615L14.4242 14.9544L12.1236 15.5472C11.864 15.6142 11.6272 15.7495 11.4376 15.939C11.2481 16.1285 11.1128 16.3654 11.0459 16.6249L9.8594 21.2261C9.83734 21.3049 9.79011 21.3743 9.72491 21.4238C9.65971 21.4732 9.58012 21.5 9.49828 21.5C9.41645 21.5 9.33686 21.4732 9.27166 21.4238C9.20646 21.3743 9.15922 21.3049 9.13717 21.2261L7.95145 16.6249Z"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <path
        d="M16.5709 8.57496C16.5307 8.41923 16.4495 8.27711 16.3358 8.16339C16.2221 8.04967 16.08 7.9685 15.9242 7.92833L13.1636 7.21644C13.1165 7.20308 13.075 7.17471 13.0455 7.13565C13.016 7.09658 13 7.04896 13 7C13 6.95104 13.016 6.90341 13.0455 6.86435C13.075 6.82529 13.1165 6.79692 13.1636 6.78355L15.9242 6.07122C16.0799 6.03109 16.222 5.94998 16.3357 5.83635C16.4494 5.72271 16.5306 5.58068 16.5709 5.42504L17.2828 2.66436C17.296 2.61707 17.3243 2.57541 17.3634 2.54574C17.4026 2.51606 17.4503 2.5 17.4994 2.5C17.5485 2.5 17.5963 2.51606 17.6354 2.54574C17.6745 2.57541 17.7029 2.61707 17.7161 2.66436L18.4275 5.42504C18.4677 5.58077 18.5489 5.72289 18.6626 5.83661C18.7763 5.95033 18.9184 6.0315 19.0742 6.07167L21.8348 6.7831C21.8823 6.7962 21.9242 6.82451 21.954 6.86369C21.9838 6.90287 22 6.95075 22 7C22 7.04925 21.9838 7.09713 21.954 7.13631C21.9242 7.17549 21.8823 7.2038 21.8348 7.21689L20.4545 7.57261L19.0742 7.92833C18.9184 7.9685 18.7763 8.04967 18.6626 8.16339C18.5489 8.27711 18.4677 8.41923 18.4275 8.57496L17.7156 11.3356C17.7024 11.3829 17.6741 11.4246 17.6349 11.4543C17.5958 11.4839 17.5481 11.5 17.499 11.5C17.4499 11.5 17.4021 11.4839 17.363 11.4543C17.3239 11.4246 17.2955 11.3829 17.2823 11.3356L16.5709 8.57496Z"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconAiThin);
export default ForwardRef;
