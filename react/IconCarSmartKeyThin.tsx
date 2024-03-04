import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarSmartKeyThin = (
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
          d="M7.1466 3.70745C7.38651 3.97786 7.80021 4.00258 8.07062 3.76267C9.20915 2.75254 10.562 2.18214 11.9999 2.18214C13.4377 2.18214 14.7906 2.75254 15.9291 3.76267C16.1995 4.00258 16.6132 3.97786 16.8531 3.70745C17.093 3.43704 17.0683 3.02334 16.7979 2.78343C15.4544 1.59145 13.8012 0.873047 11.9999 0.873047C10.1985 0.873047 8.54532 1.59145 7.20182 2.78343C6.93141 3.02334 6.90669 3.43704 7.1466 3.70745Z"
          fill="currentColor"
        />
        <path
          d="M8.85854 5.30259C9.0757 5.59159 9.48603 5.64982 9.77502 5.43265C10.3948 4.96692 11.1643 4.6912 12 4.6912C12.8357 4.6912 13.6052 4.96692 14.225 5.43265C14.514 5.64982 14.9243 5.59159 15.1414 5.30259C15.3586 5.01359 15.3004 4.60327 15.0114 4.38611C14.1727 3.75585 13.129 3.38211 12 3.38211C10.871 3.38211 9.82733 3.75585 8.9886 4.38611C8.69961 4.60327 8.64137 5.01359 8.85854 5.30259Z"
          fill="currentColor"
        />
        <path
          d="M10.3614 12.6721C10.5928 12.9498 10.5553 13.3625 10.2775 13.5939C9.71953 14.0588 9.38167 14.7146 9.38167 15.4414C9.38167 16.7595 10.5236 17.891 11.9998 17.891C13.4761 17.891 14.618 16.7595 14.618 15.4414C14.618 14.7241 14.2921 14.0712 13.7507 13.6209C13.4727 13.3898 13.4348 12.9771 13.6659 12.6991C13.8971 12.4212 14.3098 12.3832 14.5877 12.6144C15.4115 13.2994 15.9271 14.3138 15.9271 15.4414C15.9271 17.5468 14.133 19.2001 11.9998 19.2001C9.86671 19.2001 8.07258 17.5468 8.07258 15.4414C8.07258 14.2879 8.61368 13.2763 9.43958 12.5882C9.71731 12.3568 10.13 12.3943 10.3614 12.6721Z"
          fill="currentColor"
        />
        <path
          d="M12.6544 10.9092C12.6544 10.5477 12.3613 10.2547 11.9998 10.2547C11.6384 10.2547 11.3453 10.5477 11.3453 10.9092V14.1819C11.3453 14.5434 11.6384 14.8365 11.9998 14.8365C12.3613 14.8365 12.6544 14.5434 12.6544 14.1819V10.9092Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.86494 22.4728H14.135C17.0648 22.4728 19.4977 20.1585 19.171 17.3463L18.3849 10.5912L18.3846 10.5889C18.1324 8.48673 16.2019 6.98193 14.0026 6.98193H9.99735C7.80088 6.98193 5.85787 8.48507 5.61496 10.592L4.82888 17.3464C4.50234 20.1579 6.92591 22.4728 9.86494 22.4728ZM6.91545 10.7418C7.06995 9.40052 8.35423 8.29102 9.99735 8.29102H14.0026C15.6425 8.29102 16.9225 9.39801 17.0847 10.7437L17.0848 10.7449L17.8707 17.4976C18.0901 19.3877 16.435 21.1638 14.135 21.1638H9.86494C7.55752 21.1638 5.90971 19.3883 6.12923 17.4974L6.91545 10.7418Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarSmartKeyThin);
export default ForwardRef;
