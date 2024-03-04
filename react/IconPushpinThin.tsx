import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPushpinThin = (
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
    data-seed-icon-version="0.5.7"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8235 2.32415L21.8235 9.32415C21.9456 9.44032 22.0432 9.57961 22.1109 9.73391C22.1786 9.8882 22.2148 10.0544 22.2176 10.2229C22.2204 10.3913 22.1897 10.5586 22.1272 10.7151C22.0647 10.8715 21.9716 11.014 21.8535 11.1341C21.6027 11.371 21.302 11.5487 20.9735 11.6541C20.6225 11.7721 20.2608 11.8559 19.8935 11.9041C19.5917 11.946 19.288 11.9727 18.9835 11.9841H18.6035L15.7035 15.7841V15.8941C15.7292 15.9963 15.7493 16.0998 15.7635 16.2041C15.8243 16.5574 15.8477 16.916 15.8335 17.2741C15.8086 18.3418 15.3797 19.3602 14.6335 20.1241C14.3956 20.3648 14.072 20.5014 13.7335 20.5041C13.5657 20.5045 13.3995 20.471 13.2449 20.4057C13.0903 20.3404 12.9504 20.2447 12.8335 20.1241L9.46556 16.76C8.4407 17.6675 2.68397 22.7108 2.04011 22.067C1.39653 21.4234 6.44739 15.6831 7.36008 14.6569L4.02355 11.3241C3.90502 11.2061 3.81098 11.0659 3.7468 10.9114C3.68263 10.757 3.64959 10.5914 3.64959 10.4241C3.64959 10.2569 3.68263 10.0913 3.7468 9.93685C3.81098 9.7824 3.90502 9.64215 4.02355 9.52415C4.78579 8.77539 5.80529 8.34613 6.87355 8.32415C7.23132 8.30794 7.58982 8.32805 7.94355 8.38415L8.27355 8.47415H8.37355L12.1735 5.56415V5.19415C12.185 4.88967 12.2117 4.58596 12.2535 4.28415C12.3066 3.92107 12.3902 3.56313 12.5035 3.21415C12.6067 2.88168 12.7845 2.57723 13.0235 2.32415C13.1415 2.20563 13.2818 2.11158 13.4362 2.0474C13.5907 1.98323 13.7563 1.9502 13.9235 1.9502C14.0908 1.9502 14.2564 1.98323 14.4108 2.0474C14.5653 2.11158 14.7055 2.20563 14.8235 2.32415ZM20.5435 10.5541C20.702 10.5025 20.8507 10.4247 20.9835 10.3241V10.2841C20.9952 10.2785 21.0053 10.2701 21.0129 10.2597C21.0206 10.2493 21.0256 10.2372 21.0276 10.2244C21.0296 10.2116 21.0284 10.1985 21.0242 10.1863C21.02 10.1741 21.0129 10.163 21.0035 10.1541L14.0035 3.15415C13.997 3.1475 13.9893 3.14221 13.9807 3.1386C13.9721 3.135 13.9629 3.13314 13.9535 3.13314C13.9442 3.13314 13.935 3.135 13.9264 3.1386C13.9178 3.14221 13.9101 3.1475 13.9035 3.15415C13.7911 3.27915 13.712 3.43048 13.6735 3.59415C13.5768 3.86955 13.5098 4.1545 13.4735 4.44415C13.4035 4.74415 13.4035 5.02415 13.4035 5.22415V5.53415C13.4102 5.72618 13.3711 5.91704 13.2894 6.09093C13.2076 6.26482 13.0857 6.41676 12.9335 6.53415L9.14355 9.42415C8.97305 9.53877 8.77619 9.6081 8.57149 9.62559C8.4549 9.63556 8.33796 9.63698 8.22424 9.62084C8.14734 9.60992 8.07129 9.59281 7.99524 9.5757C7.90185 9.55469 7.80847 9.53368 7.71355 9.52415C7.43432 9.49467 7.15277 9.49467 6.87355 9.52415C6.12408 9.54758 5.41056 9.85083 4.87355 10.3741C4.8669 10.3807 4.86161 10.3884 4.858 10.397C4.8544 10.4056 4.85254 10.4148 4.85254 10.4241C4.85254 10.4335 4.8544 10.4427 4.858 10.4513C4.86161 10.4599 4.8669 10.4676 4.87355 10.4741L13.6035 19.3041C13.6193 19.3163 13.6386 19.3229 13.6585 19.3229C13.6785 19.3229 13.6978 19.3163 13.7135 19.3041C14.2485 18.7546 14.5527 18.021 14.5635 17.2541C14.5887 16.9781 14.5887 16.7002 14.5635 16.4241C14.5509 16.3434 14.5343 16.2633 14.5135 16.1841C14.4578 15.9986 14.446 15.8027 14.4789 15.6118C14.5119 15.4209 14.5888 15.2402 14.7035 15.0841L17.5935 11.2841C17.7104 11.1314 17.8622 11.009 18.0362 10.9272C18.2103 10.8454 18.4014 10.8066 18.5935 10.8141H18.9035C19.1683 10.8115 19.4324 10.7881 19.6935 10.7441C19.9817 10.7049 20.2661 10.6414 20.5435 10.5541Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPushpinThin);
export default ForwardRef;
