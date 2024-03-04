import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarCruiseControlThin = (
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
      <g>
        <path
          d="M11.827 3.68046C6.53163 3.72019 2.26095 7.98869 2.30032 13.2348C2.3193 15.7645 3.33821 18.0668 4.99313 19.7468C5.10649 19.8619 5.26159 19.9262 5.42312 19.9252C5.58465 19.9241 5.73889 19.8578 5.85074 19.7412L7.16054 18.3765C7.38927 18.1381 7.38149 17.7595 7.14316 17.5308C6.90484 17.3021 6.52622 17.3099 6.2975 17.5482L5.4297 18.4524C4.37851 17.2109 3.69412 15.6522 3.53294 13.9443L4.83166 13.9443C5.16198 13.9443 5.42976 13.6765 5.42976 13.3462C5.42976 13.0159 5.16198 12.7481 4.83166 12.7481L3.50663 12.7481C3.60015 10.8809 4.3211 9.17288 5.46827 7.82864L6.40874 8.76911C6.64231 9.00268 7.02101 9.00268 7.25458 8.76911C7.48816 8.53553 7.48816 8.15684 7.25458 7.92326L6.30778 6.97646C7.63628 5.80754 9.34515 5.04803 11.2336 4.90208L11.2336 6.34618C11.2336 6.67651 11.5013 6.94429 11.8317 6.94429C12.162 6.94429 12.4298 6.67651 12.4298 6.34618L12.4298 4.89249C14.3348 5.009 16.0672 5.75122 17.4187 6.91352L17.4087 6.92326L16.4087 7.92326C16.1752 8.15683 16.1752 8.53553 16.4087 8.76911C16.6423 9.00268 17.021 9.00268 17.2546 8.76911L18.2546 7.76911L18.2675 7.75582C19.4602 9.12174 20.2087 10.8761 20.2922 12.8013L18.8238 12.8013C18.4935 12.8013 18.2257 13.0691 18.2257 13.3994C18.2257 13.7297 18.4935 13.9975 18.8238 13.9975L20.2578 13.9975C20.0919 15.6274 19.4459 17.1227 18.4567 18.3389L17.5558 17.4628C17.3189 17.2325 16.9403 17.2378 16.71 17.4746C16.4797 17.7115 16.485 18.0901 16.7218 18.3204L18.0742 19.6356C18.1891 19.7473 18.344 19.8082 18.5043 19.8047C18.6645 19.8012 18.8166 19.7336 18.9265 19.6169C20.5379 17.9066 21.5149 15.6059 21.496 13.0908C21.4566 7.84465 17.1224 3.64072 11.827 3.68046Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8671 11.3448C11.5214 11.3448 11.1953 11.4284 10.9077 11.5764L9.25458 9.92326C9.02101 9.68969 8.64231 9.68969 8.40874 9.92326C8.17517 10.1568 8.17517 10.5355 8.40874 10.7691L10.0437 12.4041C9.86888 12.7104 9.76896 13.0649 9.76896 13.4429C9.76896 14.6016 10.7083 15.541 11.8671 15.541C13.0258 15.541 13.9652 14.6016 13.9652 13.4429C13.9652 12.2841 13.0258 11.3448 11.8671 11.3448ZM10.9652 13.4429C10.9652 12.9448 11.369 12.541 11.8671 12.541C12.3652 12.541 12.769 12.9448 12.769 13.4429C12.769 13.941 12.3652 14.3448 11.8671 14.3448C11.369 14.3448 10.9652 13.941 10.9652 13.4429Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarCruiseControlThin);
export default ForwardRef;
