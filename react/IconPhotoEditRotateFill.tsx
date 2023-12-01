import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPhotoEditRotateFill = (
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
          d="M11.8501 4.8501C10.9698 4.8501 10.1297 5.01211 9.35637 5.30705C8.84034 5.50386 8.26248 5.24507 8.06567 4.72904C7.86887 4.21301 8.12765 3.63515 8.64368 3.43834C9.64107 3.05796 10.7225 2.8501 11.8501 2.8501C16.8207 2.8501 20.8501 6.87953 20.8501 11.8501C20.8501 13.282 20.5152 14.6367 19.9197 15.8392L20.3337 15.7012C20.8576 15.5266 21.424 15.8097 21.5986 16.3337C21.7733 16.8576 21.4901 17.4239 20.9662 17.5986L17.9662 18.5986C17.6887 18.6911 17.3847 18.6575 17.1341 18.5066C16.8836 18.3558 16.7116 18.1028 16.6635 17.8143L16.1635 14.8143C16.0727 14.2695 16.4408 13.7543 16.9855 13.6635C17.5303 13.5727 18.0455 13.9407 18.1363 14.4855L18.1918 14.8183C18.6143 13.9174 18.8501 12.9118 18.8501 11.8501C18.8501 7.9841 15.7161 4.8501 11.8501 4.8501Z"
          fill="currentColor"
        />
        <path
          d="M5.61349 9.16452L5.55141 8.79206C5.10206 9.71563 4.85013 10.7528 4.85013 11.8501C4.85013 15.7161 7.98414 18.8501 11.8501 18.8501C12.7312 18.8501 13.572 18.6878 14.3459 18.3924C14.8618 18.1955 15.4398 18.4541 15.6367 18.97C15.8337 19.486 15.5751 20.064 15.0591 20.2609C14.061 20.6419 12.9787 20.8501 11.8501 20.8501C6.87957 20.8501 2.85013 16.8207 2.85013 11.8501C2.85013 10.4024 3.19256 9.03326 3.80065 7.82063L3.41611 7.94881C2.89217 8.12346 2.32585 7.8403 2.1512 7.31635C1.97655 6.79241 2.25971 6.22609 2.78365 6.05144L5.78365 5.05144C6.0611 4.95896 6.36514 4.99257 6.61569 5.14342C6.86624 5.29427 7.03819 5.54725 7.08627 5.83573L7.58627 8.83573C7.67707 9.3805 7.30905 9.89572 6.76428 9.98652C6.21951 10.0773 5.70428 9.70929 5.61349 9.16452Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPhotoEditRotateFill);
export default ForwardRef;
