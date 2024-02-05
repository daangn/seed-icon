import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconViewCountOffRegular = (
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
    data-seed-icon-version="0.5.6"
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
          d="M17.8342 20.5344C18.1466 20.8468 18.6532 20.8468 18.9656 20.5344C19.278 20.2219 19.278 19.7154 18.9656 19.403L4.09696 4.53436C3.78454 4.22194 3.27801 4.22194 2.96559 4.53436C2.65317 4.84678 2.65317 5.35332 2.96559 5.66573L4.85464 7.55478C3.84944 8.39185 3.02467 9.37994 2.38031 10.519C1.87323 11.4155 1.87322 12.5219 2.38034 13.4183C3.21005 14.885 4.33891 16.101 5.76692 17.0665C7.64153 18.3346 9.71922 18.9687 12 18.9687C13.2859 18.9687 14.5072 18.7671 15.6639 18.3641L17.8342 20.5344ZM14.3817 17.0818L13.1119 15.8121C12.7589 15.914 12.3858 15.9687 12 15.9687C9.79086 15.9687 8 14.1778 8 11.9687C8 11.5828 8.05463 11.2097 8.15658 10.8567L5.98347 8.68361C5.05996 9.42471 4.31655 10.3015 3.74168 11.3177C3.51424 11.7198 3.51425 12.2176 3.74167 12.6196C4.4462 13.8649 5.40385 14.9005 6.63591 15.7336C8.24923 16.8249 10.0241 17.3687 12 17.3687C12.8283 17.3687 13.6212 17.2732 14.3817 17.0818Z"
          fill="currentColor"
        />
        <path
          d="M21.6197 13.4183C20.8589 14.763 19.8467 15.8971 18.5831 16.8205L17.4425 15.68C18.6368 14.8563 19.5689 13.8383 20.2583 12.6196C20.4857 12.2176 20.4858 11.7198 20.2583 11.3177C19.5537 10.0722 18.596 9.03618 17.3638 8.20265C15.7505 7.11197 13.976 6.56868 12 6.56868C10.8881 6.56868 9.8398 6.74078 8.8482 7.08565L7.61594 5.85339C8.98279 5.26358 10.4441 4.96868 12 4.96868C14.2808 4.96868 16.3585 5.60241 18.2331 6.86988C19.6611 7.83587 20.79 9.05226 21.6197 10.519C22.1268 11.4155 22.1268 12.5219 21.6197 13.4183Z"
          fill="currentColor"
        />
        <path
          d="M16 11.9687C16 12.6272 15.8409 13.2486 15.559 13.7964L13.5405 11.7779C13.8359 11.9008 14.16 11.9687 14.5 11.9687C15.0501 11.9687 15.5588 11.791 15.9716 11.4899C15.9904 11.6469 16 11.8066 16 11.9687Z"
          fill="currentColor"
        />
        <path
          d="M12 9.46868C12 9.80865 12.0679 10.1328 12.1908 10.4282L10.1723 8.40973C10.7201 8.12781 11.3415 7.96868 12 7.96868C12.162 7.96868 12.3218 7.97831 12.4788 7.99704C12.1777 8.40991 12 8.91854 12 9.46868Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconViewCountOffRegular);
export default ForwardRef;
