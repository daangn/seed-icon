import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconLeafFill = (
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
    data-seed-icon-version="0.4.0"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M20.9491 2.38441C21.8214 2.18294 22.697 2.68196 22.9723 3.53069C23.5616 5.34751 23.841 7.25739 23.7952 9.17705C23.7382 11.5628 23.18 13.9088 22.1579 16.0567C22.1496 16.0741 22.1407 16.0913 22.1311 16.1081C20.8352 18.3892 19.2432 19.6338 17.5502 20.0593C15.8696 20.4817 14.2317 20.0609 12.9024 19.2959L12.9012 19.2952C12.6642 19.1582 12.438 19.0024 12.2238 18.8295C12.2622 18.7922 12.2975 18.7504 12.3288 18.7042L14.7503 15.1341L18.7757 14.7234C19.2152 14.6785 19.5352 14.2859 19.4903 13.8463C19.4455 13.4068 19.0528 13.0868 18.6133 13.1317L15.9223 13.4062L18.8787 9.04749C19.1267 8.68183 19.0314 8.18436 18.6657 7.93635C18.3001 7.68833 17.8026 7.7837 17.5546 8.14935L11.1156 17.6425C9.63558 15.5552 9.28684 12.3989 10.831 9.61323C10.8387 9.59943 10.8467 9.58586 10.8552 9.57253C12.1274 7.56709 13.8091 5.86357 15.7868 4.57891C17.3733 3.54828 19.1202 2.80685 20.9491 2.38441Z"
          fill="currentColor"
        />
        <path
          d="M8.64591 16.5437C8.05066 14.6915 8.02006 12.5442 8.74458 10.466C8.05164 10.0615 7.22027 9.6709 6.16378 9.32668C4.77981 8.87577 3.33612 8.65769 1.8892 8.67806C0.981813 8.69084 0.249809 9.40843 0.212102 10.3111C0.150457 11.7868 0.323534 13.2663 0.727651 14.6917C1.26211 16.5767 2.18835 18.3233 3.44434 19.8126L3.4552 19.8252C4.4523 20.9587 6.00341 21.8888 7.5 22C8.49566 22.0937 10.087 22.0794 11.4583 21.0886C11.4502 21.0811 11.4422 21.0734 11.4343 21.0655L4.99996 15.5C4.68755 15.1876 4.68755 14.681 4.99996 14.3686C5.31238 14.0562 5.81892 14.0562 6.13134 14.3686L8.64591 16.5437Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconLeafFill);
export default ForwardRef;
