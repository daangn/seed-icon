import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconFileFill = (
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
        d="M12.7071 2.82414C13.0976 3.21467 13.0976 3.84783 12.7071 4.23836L5.23013 11.7153C4.46334 12.5945 4 13.7419 4 15C4 17.7614 6.23858 20 9 20C9.80519 20 10.5737 19.6957 11.3608 19.1663C12.1586 18.6297 12.9053 17.9114 13.6795 17.1534L19.7336 11.2261C19.7866 11.1725 19.928 11.0164 20.0802 10.8363C20.1545 10.7483 20.2236 10.6638 20.2782 10.5936C20.3187 10.5414 20.3398 10.5116 20.3477 10.5005C20.3523 10.4941 20.3524 10.4939 20.3493 10.4993C20.6039 10.059 20.75 9.54808 20.75 8.99999C20.75 7.34313 19.4069 5.99999 17.75 5.99999C17.2336 5.99999 16.7293 6.20097 16.1815 6.58697C15.6326 6.97376 15.1197 7.4868 14.5555 8.05105L14.5161 8.09039L8.31219 14.274L8.30617 14.2798C8.1162 14.463 8 14.717 8 15C8 15.5523 8.44772 16 9 16C9.11765 16 9.26869 15.9569 9.49191 15.8C9.72843 15.6337 9.95714 15.4058 10.2532 15.1098L14.7929 10.5701C15.1834 10.1795 15.8166 10.1795 16.2071 10.5701C16.5976 10.9606 16.5976 11.5937 16.2071 11.9843L11.6674 16.524C11.6531 16.5383 11.6385 16.5529 11.6236 16.5678C11.3655 16.8263 11.0262 17.1662 10.6421 17.4362C10.2225 17.7311 9.67296 18 9 18C7.34315 18 6 16.6568 6 15C6 14.1551 6.35057 13.3904 6.91155 12.8463L13.1031 6.67502C13.1029 6.67524 13.1033 6.67481 13.1031 6.67502C13.1303 6.64782 13.1584 6.61968 13.1861 6.59192C13.7136 6.06383 14.336 5.44077 15.0295 4.9521C15.7732 4.42804 16.6767 3.99999 17.75 3.99999C20.5114 3.99999 22.75 6.23856 22.75 8.99999C22.75 9.90904 22.5065 10.7643 22.0805 11.5007C21.9703 11.6912 21.7537 11.9545 21.6079 12.1271C21.4435 12.3216 21.2562 12.5319 21.1449 12.6433L21.1374 12.6508L15.0787 18.5825C14.3219 19.3234 13.4503 20.1712 12.477 20.8258C11.493 21.4877 10.3375 22 9 22C5.13401 22 2 18.866 2 15C2 13.2254 2.66166 11.6029 3.75026 10.3695L3.77087 10.3462L11.2929 2.82414C11.6834 2.43362 12.3166 2.43362 12.7071 2.82414Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconFileFill);
export default ForwardRef;
