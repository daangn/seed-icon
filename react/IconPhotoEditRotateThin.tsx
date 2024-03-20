import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPhotoEditRotateThin = (
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
    data-seed-icon-version="0.6.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M9.21377 4.93321C10.0319 4.62118 10.9203 4.45 11.8501 4.45C15.937 4.45 19.2501 7.76309 19.2501 11.85C19.2501 13.3858 18.7828 14.8113 17.9822 15.9936L17.7418 14.5513C17.6873 14.2244 17.3782 14.0036 17.0513 14.0581C16.7245 14.1125 16.5036 14.4217 16.5581 14.7485L17.0581 17.7485C17.087 17.9216 17.1901 18.0734 17.3405 18.1639C17.4908 18.2544 17.6732 18.2746 17.8397 18.2191L20.8397 17.2191C21.1541 17.1143 21.324 16.7745 21.2192 16.4602C21.1144 16.1458 20.7746 15.9759 20.4602 16.0807L19.0535 16.5496C19.9365 15.1987 20.4501 13.5838 20.4501 11.85C20.4501 7.10035 16.5997 3.25 11.8501 3.25C10.7719 3.25 9.73873 3.44869 8.78616 3.81199C8.47654 3.93007 8.32127 4.27679 8.43935 4.58641C8.55743 4.89602 8.90415 5.05129 9.21377 4.93321Z"
          fill="currentColor"
        />
        <path
          d="M5.76488 7.63796L6.00833 9.09864C6.0628 9.42551 6.37194 9.64632 6.6988 9.59184C7.02566 9.53736 7.24648 9.22823 7.192 8.90136L6.692 5.90136C6.66315 5.72828 6.55998 5.57649 6.40965 5.48598C6.25932 5.39547 6.0769 5.3753 5.91043 5.43079L2.91043 6.43079C2.59606 6.53558 2.42616 6.87537 2.53095 7.18974C2.63574 7.50411 2.97553 7.674 3.2899 7.56921L4.67479 7.10758C3.77453 8.46717 3.25006 10.098 3.25006 11.85C3.25006 16.5996 7.10041 20.45 11.8501 20.45C12.9291 20.45 13.9631 20.251 14.9164 19.8871C15.226 19.7689 15.3811 19.4221 15.263 19.1126C15.1448 18.803 14.798 18.6478 14.4884 18.766C13.6697 19.0785 12.7806 19.25 11.8501 19.25C7.76315 19.25 4.45006 15.9369 4.45006 11.85C4.45006 10.2842 4.93572 8.83338 5.76488 7.63796Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPhotoEditRotateThin);
export default ForwardRef;
