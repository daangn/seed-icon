/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconWalkRegular = (
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
          d="M13 2.8002C12.3372 2.8002 11.8 3.33745 11.8 4.0002C11.8 4.66294 12.3372 5.2002 13 5.2002C13.6627 5.2002 14.2 4.66294 14.2 4.0002C14.2 3.33745 13.6627 2.8002 13 2.8002ZM10.2 4.0002C10.2 2.4538 11.4536 1.2002 13 1.2002C14.5464 1.2002 15.8 2.4538 15.8 4.0002C15.8 5.54659 14.5464 6.8002 13 6.8002C11.4536 6.8002 10.2 5.54659 10.2 4.0002Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.70725 14.2397C8.12724 14.3769 8.3565 14.8286 8.21931 15.2486L7.42493 17.6806C7.39539 17.771 7.34998 17.8554 7.29081 17.9299L5.90858 19.6694C5.89804 19.6827 5.88709 19.6956 5.87574 19.7081C5.7716 19.8234 5.77473 20.0272 5.88563 20.1404C5.93165 20.1874 5.97914 20.2011 6.01942 20.2001C6.05734 20.1992 6.10367 20.1847 6.14807 20.1407L7.67868 18.2467L7.69034 18.2326C7.69034 18.2326 7.69342 18.2289 7.69835 18.2201C7.7027 18.2123 7.70792 18.2016 7.71327 18.1876L8.24186 16.6193C8.38298 16.2006 8.83679 15.9756 9.25548 16.1167C9.67416 16.2579 9.89918 16.7117 9.75806 17.1304L9.22582 18.7095L9.21999 18.7261C9.15441 18.9074 9.05702 19.0922 8.91836 19.2582L7.37407 21.1692C7.36481 21.1807 7.35523 21.1919 7.34535 21.2028C6.65155 21.9704 5.47481 22.0079 4.74239 21.2598C4.04972 20.5524 4.01499 19.4037 4.66954 18.6568L5.94866 17.0471L6.69839 14.7518C6.83558 14.3318 7.28726 14.1025 7.70725 14.2397Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.61111 6.42909C8.99493 6.10976 9.50443 5.9776 9.98769 6.06151L9.99991 6.06363L14.6287 6.94158C15.3081 7.06168 15.8444 7.5827 15.9799 8.25902L16.4901 10.7437L17.8684 11.4519C17.8772 11.4565 17.8859 11.4611 17.8946 11.466C18.7263 11.9332 19.0437 12.9878 18.5986 13.8398C18.1382 14.7313 17.0568 15.0531 16.188 14.5881L14.9297 13.9676C14.5334 13.7722 14.3706 13.2926 14.566 12.8963C14.7615 12.5 15.2411 12.3372 15.6374 12.5326L16.9093 13.1599C16.9198 13.1651 16.9303 13.1705 16.9406 13.1762C16.9901 13.2034 17.0373 13.205 17.0762 13.1933C17.1144 13.1818 17.1514 13.1554 17.1773 13.1052L17.1803 13.0993C17.2229 13.018 17.1926 12.9126 17.1184 12.8654L15.4179 11.9916C15.2023 11.8809 15.0486 11.6784 14.9999 11.441L14.4111 8.57356C14.4059 8.54712 14.3849 8.52313 14.3497 8.51708L14.3362 8.51475L9.71126 7.63751C9.68616 7.63415 9.65361 7.6432 9.63459 7.65893L6.63874 10.1556C6.61009 10.1805 6.59906 10.2072 6.59643 10.2218L6.30016 12.0633C6.30061 12.159 6.30251 12.2179 6.30908 12.2689C6.31282 12.2979 6.31699 12.3134 6.31922 12.3202C6.34004 12.34 6.41024 12.3915 6.59473 12.4469C6.76215 12.4353 6.90714 12.3944 7.00132 12.3448C7.03081 12.3292 7.04909 12.3167 7.05984 12.3081L7.30082 10.8086C7.33193 10.615 7.43309 10.4395 7.58506 10.3156L9.01485 9.14944C9.35724 8.87018 9.86118 8.92137 10.1404 9.26376C10.4197 9.60615 10.3685 10.1101 10.0261 10.3893L8.83224 11.363L8.63541 12.5879C8.54411 13.1797 8.13491 13.5559 7.74754 13.7601C7.36062 13.9641 6.91037 14.0501 6.49993 14.0501C6.43453 14.0501 6.36938 14.0421 6.30593 14.0262C5.69245 13.8729 5.20517 13.5967 4.93041 13.1158C4.69686 12.7071 4.69889 12.264 4.69991 12.0392C4.69997 12.0254 4.70003 12.0123 4.70003 12.0001C4.70003 11.9576 4.70343 11.9151 4.71019 11.8731L5.01777 9.96131C5.0855 9.55202 5.30232 9.19111 5.60538 8.93408L5.61064 8.92961L8.61111 6.42909ZM7.07317 12.2951C7.07317 12.2951 7.07229 12.2969 7.06894 12.3002C7.07124 12.2966 7.07317 12.2951 7.07317 12.2951ZM6.31189 12.3115C6.31189 12.3115 6.31436 12.3136 6.31747 12.3184C6.31313 12.3141 6.31189 12.3115 6.31189 12.3115Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2373 11.0348C13.6777 11.07 14.0062 11.4556 13.9709 11.8961L13.8209 13.7709L15.7237 16.4094C15.9637 16.7141 16.0795 17.0802 16.0943 17.4283L16.0947 17.4375L16.1991 20.8134C16.2285 21.879 15.4008 22.7688 14.3356 22.7995C13.2511 22.8307 12.4044 21.9591 12.3739 20.9141L12.2953 18.6609L9.34526 14.46C9.09135 14.0984 9.17863 13.5995 9.54021 13.3455C9.90178 13.0916 10.4007 13.1789 10.6547 13.5405L13.7412 17.9358C13.8303 18.0627 13.8807 18.2127 13.8861 18.3677L13.9732 20.8667C13.9792 21.0825 14.1404 21.2045 14.2895 21.2002C14.4586 21.1953 14.6046 21.0545 14.5997 20.8585L14.5997 20.8575L14.4956 17.4932C14.4929 17.4423 14.4752 17.4098 14.4663 17.3989C14.4564 17.3866 14.4467 17.3741 14.4375 17.3613L12.3511 14.4682C12.24 14.3142 12.1874 14.1257 12.2025 13.9364L12.376 11.7684C12.4113 11.328 12.7969 10.9995 13.2373 11.0348Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconWalkRegular);
export default ForwardRef;
