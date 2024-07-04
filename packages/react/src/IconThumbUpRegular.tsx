/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconThumbUpRegular = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7667 1.97634C13.4652 1.88341 13.1087 1.85875 12.7524 1.99646C12.3936 2.13512 12.1298 2.40179 11.9496 2.71727C11.9395 2.73491 11.9301 2.75293 11.9213 2.7713C10.1884 6.42063 8.47112 8.73862 7.67448 9.63456H3.1551C2.71051 9.63456 2.3501 9.99498 2.3501 10.4396V21.18C2.3501 21.6245 2.71051 21.985 3.1551 21.985H15.813C17.2576 21.985 18.1746 21.6605 18.8172 21.0161C20.164 19.6656 21.0375 17.4686 21.6151 15.5633C21.9347 14.5091 22.2849 13.1328 22.2605 11.8985C22.2481 11.2763 22.1404 10.6303 21.8365 10.0656C21.5204 9.47848 21.0132 9.02078 20.298 8.77919C20.1297 8.72236 19.9639 8.68403 19.8079 8.66447C19.7746 8.66031 19.7412 8.65822 19.7077 8.65822H15.1665L16.0466 6.89324C16.0606 6.86507 16.073 6.83611 16.0836 6.80648C16.3245 6.13693 16.2611 5.41427 16.0815 4.79142C15.8995 4.16038 15.577 3.5541 15.1962 3.06832C14.8308 2.60223 14.3365 2.15193 13.7667 1.97634ZM3.9601 11.2446V20.375H7.19995V11.2446H3.9601ZM8.80995 10.7795C9.71571 9.78201 11.5338 7.3233 13.3414 3.53396C13.4701 3.59295 13.6869 3.75263 13.9291 4.0616C14.1899 4.39432 14.4132 4.81662 14.5345 5.23751C14.6518 5.6442 14.6559 5.98297 14.5812 6.22399L13.1452 9.10401C13.0208 9.35355 13.0344 9.6497 13.1811 9.88681C13.3278 10.1239 13.5868 10.2682 13.8656 10.2682H19.6469C19.6839 10.2752 19.7299 10.2867 19.7827 10.3045C20.1016 10.4122 20.2911 10.5916 20.4188 10.8287C20.5585 11.0883 20.6413 11.4539 20.6508 11.9303C20.6698 12.893 20.3881 14.0613 20.0744 15.0962C19.5035 16.9791 18.7204 18.8332 17.6772 19.8792C17.4473 20.1097 17.0173 20.375 15.813 20.375H8.80995V10.7795Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconThumbUpRegular);
export default ForwardRef;
