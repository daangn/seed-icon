import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconJobsFill = (
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
    data-seed-icon-version="0.4.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M22.2295 18.9999L20.1695 17.2799C21.6218 15.1152 22.2169 12.4877 21.8391 9.90849C21.4613 7.3293 20.1377 4.98283 18.1256 3.32554C16.1136 1.66824 13.557 0.81862 10.9532 0.941942C8.34942 1.06526 5.88458 2.15271 4.03818 3.99275C2.19177 5.83279 1.09581 8.29386 0.963496 10.8972C0.831181 13.5006 1.67197 16.0601 3.3223 18.0778C4.97264 20.0956 7.31452 21.4273 9.89239 21.814C12.4703 22.2007 15.0998 21.6147 17.2695 20.1699L18.9995 22.2399C19.2084 22.4686 19.4615 22.6526 19.7436 22.7806C20.0256 22.9087 20.3307 22.9782 20.6404 22.985C20.95 22.9918 21.2579 22.9356 21.5452 22.82C21.8326 22.7044 22.0935 22.5317 22.3122 22.3123C22.5308 22.0929 22.7028 21.8315 22.8175 21.5438C22.9322 21.2561 22.9874 20.9481 22.9797 20.6384C22.972 20.3288 22.9015 20.0239 22.7725 19.7423C22.6436 19.4606 22.4589 19.2081 22.2295 18.9999ZM5.79953 17.0999C4.48981 15.7916 3.67433 14.0697 3.49209 12.2275C3.30985 10.3853 3.77214 8.53687 4.80014 6.99735C5.82814 5.45783 7.35824 4.32247 9.12963 3.78478C10.901 3.2471 12.804 3.34038 14.5144 4.04873C16.2247 4.75707 17.6364 6.03663 18.5089 7.6693C19.3814 9.30198 19.6607 11.1867 19.2992 13.0023C18.9377 14.8178 17.9577 16.4518 16.5263 17.6257C15.0949 18.7996 13.3007 19.4408 11.4495 19.4399C9.33062 19.4389 7.29865 18.5974 5.79953 17.0999Z"
          fill="currentColor"
        />
        <path
          d="M12.7895 11.1699C13.3953 10.8688 13.8816 10.3719 14.1694 9.75978C14.4572 9.14763 14.5297 8.45617 14.3751 7.79763C14.2205 7.13909 13.8479 6.55212 13.3177 6.13201C12.7876 5.71189 12.131 5.48328 11.4545 5.48328C10.7781 5.48328 10.1215 5.71189 9.59133 6.13201C9.06117 6.55212 8.68854 7.13909 8.53394 7.79763C8.37934 8.45617 8.45184 9.14763 8.73966 9.75978C9.02749 10.3719 9.51376 10.8688 10.1195 11.1699C8.34954 11.5899 6.54954 12.7499 6.11954 14.3199C6.0227 14.715 6.07616 15.132 6.26954 15.4899C6.41249 15.7176 6.58017 15.9289 6.76954 16.1199C8.0304 17.3507 9.72255 18.0396 11.4845 18.0396C13.2465 18.0396 14.9387 17.3507 16.1995 16.1199C16.3856 15.9286 16.5499 15.7173 16.6895 15.4899C16.8911 15.1349 16.9484 14.7159 16.8495 14.3199C16.3595 12.7499 14.5595 11.5899 12.7895 11.1699Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconJobsFill);
export default ForwardRef;
