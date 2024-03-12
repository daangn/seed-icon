import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarHeatedSeatThin = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0762 4.88573C15.5593 3.08274 17.4126 2.01278 19.2155 2.49588C21.0185 2.97899 22.0885 4.83223 21.6054 6.63521L17.9508 20.3244C17.7471 21.0874 17.0561 21.6181 16.2664 21.6181L5.64977 21.6181C3.78318 21.6181 2.27002 20.1049 2.27002 18.2383C2.27002 16.3718 3.78318 14.8586 5.64977 14.8586H12.0676C12.266 14.8586 12.4397 14.7253 12.4911 14.5336L15.0762 4.88573ZM18.8778 3.75637C17.771 3.45979 16.6333 4.11664 16.3367 5.22347L13.7516 14.8714C13.5473 15.6336 12.8566 16.1635 12.0676 16.1635H5.64977C4.50389 16.1635 3.57497 17.0925 3.57497 18.2383C3.57497 19.3842 4.50389 20.3131 5.64977 20.3131L16.2664 20.3132C16.465 20.3132 16.6388 20.1797 16.69 19.9878L20.3448 6.29804C20.6413 5.19121 19.9846 4.05294 18.8778 3.75637Z"
          fill="currentColor"
        />
        <path
          d="M2.92254 6.784L5.10436 3.51127L7.28618 6.784H5.57917C5.45867 7.11985 5.43457 7.44149 5.4824 7.70589C5.53477 7.99541 5.71759 8.2688 6.02383 8.67772L6.07368 8.74408C6.34004 9.09809 6.69784 9.57363 6.84073 10.1487C6.93871 10.543 6.97458 10.9762 6.86396 11.4276C6.75248 11.8826 6.50427 12.3069 6.11105 12.7C5.85623 12.9548 5.44311 12.9548 5.18831 12.7C4.93352 12.4452 4.93354 12.032 5.18836 11.7773C5.4394 11.5262 5.55013 11.3063 5.5965 11.1171C5.64374 10.9243 5.63637 10.7133 5.57429 10.4634C5.49864 10.1589 5.29435 9.88061 4.97932 9.45996L4.96893 9.44608C4.69137 9.07554 4.31255 8.56981 4.19829 7.93819C4.1312 7.5673 4.14154 7.17458 4.22508 6.784H2.92254Z"
          fill="currentColor"
        />
        <path
          d="M9.94281 6.784H11.6498L9.468 3.51127L7.28618 6.784H8.58872C8.50518 7.17458 8.49483 7.5673 8.56193 7.93819C8.67619 8.56981 9.05501 9.07554 9.33256 9.44608L9.34296 9.45996C9.65799 9.88061 9.86228 10.1589 9.93793 10.4634C10 10.7133 10.0074 10.9243 9.96014 11.1171C9.91377 11.3063 9.80304 11.5262 9.552 11.7773C9.29718 12.032 9.29716 12.4452 9.55195 12.7C9.80675 12.9548 10.2199 12.9548 10.4747 12.7C10.8679 12.3069 11.1161 11.8826 11.2276 11.4276C11.3382 10.9762 11.3023 10.543 11.2044 10.1487C11.0615 9.57363 10.7037 9.09809 10.4373 8.74408L10.3875 8.67772C10.0812 8.2688 9.89841 7.99541 9.84604 7.70589C9.79821 7.44149 9.82231 7.11985 9.94281 6.784Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarHeatedSeatThin);
export default ForwardRef;
