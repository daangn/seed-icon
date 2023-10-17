import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size?: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.11"
    width="100%"
    height="100%"
    {...props}
  >
    <g>
      <g>
        <path
          d="M11.9273 3.68046C6.52288 3.72101 2.16001 8.07815 2.20023 13.4382C2.21962 16.022 3.26054 18.3742 4.9511 20.0904C5.10273 20.2443 5.31017 20.3304 5.52623 20.329C5.7423 20.3276 5.9486 20.2388 6.09821 20.0829L7.40801 18.7182C7.71394 18.3994 7.70354 17.893 7.38476 17.587C7.06599 17.2811 6.55957 17.2915 6.25363 17.6103L5.54308 18.3506C4.64263 17.2245 4.04339 15.8495 3.85968 14.3481L4.93342 14.3481C5.37524 14.3481 5.73342 13.99 5.73342 13.5481C5.73342 13.1063 5.37524 12.7481 4.93342 12.7481H3.82352C3.95087 11.0867 4.58826 9.56227 5.58388 8.32997L6.36773 9.11382C6.68015 9.42624 7.18668 9.42624 7.4991 9.11382C7.81152 8.8014 7.81152 8.29487 7.4991 7.98245L6.70645 7.1898C7.92579 6.17235 9.452 5.49907 11.1334 5.32494L11.1334 6.54814C11.1334 6.98997 11.4916 7.34814 11.9334 7.34814C12.3752 7.34814 12.7334 6.98997 12.7334 6.54814V5.31176C14.4319 5.4594 15.9806 6.11714 17.2217 7.1285L16.3677 7.98245C16.0553 8.29487 16.0553 8.8014 16.3677 9.11382C16.6802 9.42624 17.1867 9.42624 17.4991 9.11382L18.3574 8.25552C19.397 9.51209 20.0607 11.0829 20.1804 12.8014H18.9256C18.4838 12.8014 18.1256 13.1595 18.1256 13.6014C18.1256 14.0432 18.4838 14.4014 18.9256 14.4014H20.1329C19.9471 15.8285 19.3829 17.1428 18.5389 18.2402L17.7983 17.52C17.4816 17.212 16.9751 17.219 16.6671 17.5358C16.359 17.8525 16.3661 18.359 16.6828 18.667L18.0353 19.9822C18.1889 20.1316 18.3962 20.2132 18.6105 20.2085C18.8248 20.2038 19.0283 20.1133 19.1753 19.9573C20.8207 18.2109 21.819 15.8605 21.7997 13.2912C21.7595 7.93108 17.3317 3.63991 11.9273 3.68046Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9688 11.3443C11.6427 11.3443 11.3324 11.4122 11.0513 11.5346L9.4991 9.98245C9.18668 9.67003 8.68015 9.67003 8.36773 9.98245C8.05531 10.2949 8.05531 10.8014 8.36773 11.1138L9.8974 12.6435C9.75094 12.9461 9.66882 13.2856 9.66882 13.6443C9.66882 14.9146 10.6986 15.9443 11.9688 15.9443C13.2391 15.9443 14.2688 14.9146 14.2688 13.6443C14.2688 12.3741 13.2391 11.3443 11.9688 11.3443ZM11.2688 13.6443C11.2688 13.2577 11.5822 12.9443 11.9688 12.9443C12.3554 12.9443 12.6688 13.2577 12.6688 13.6443C12.6688 14.0309 12.3554 14.3443 11.9688 14.3443C11.5822 14.3443 11.2688 14.0309 11.2688 13.6443Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconCarCruiseControlRegular = (
  { size = 24, className }: Props,
  ref: React.ForwardedRef<HTMLSpanElement>
) => {
  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
      }}
    >
      <SVG />
    </span>
  );
};
export default React.forwardRef(IconCarCruiseControlRegular);
