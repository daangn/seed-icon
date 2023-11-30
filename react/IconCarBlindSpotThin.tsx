import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.15"
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.711 9.79994C3.71064 9.81267 3.71065 9.82536 3.71103 9.838C3.72179 13.8041 6.94028 17.016 10.9089 17.016H14.1817C18.1522 17.016 21.3719 13.8011 21.3796 9.83235C21.3798 9.82321 21.3798 9.81408 21.3796 9.80497V3.27259C21.3796 2.91224 21.0875 2.62012 20.7271 2.62012C20.3668 2.62012 20.0746 2.91224 20.0746 3.27259V8.69543C19.3448 8.14388 18.8779 7.41627 18.579 6.73661C18.3758 6.27468 18.2558 5.84638 18.187 5.53446C18.1527 5.3791 18.1315 5.25425 18.1191 5.17065C18.1131 5.13041 18.1092 5.09987 18.1068 5.08021V3.27259C18.1068 2.91224 17.8147 2.62012 17.4544 2.62012C17.094 2.62012 16.8019 2.91224 16.8019 3.27259V5.11562C16.8019 5.13542 16.8028 5.15521 16.8046 5.17493L16.8048 5.17764L16.8052 5.18163L16.8064 5.19337L16.8107 5.23144C16.8144 5.26313 16.8201 5.30726 16.8283 5.36243C16.8447 5.47268 16.8712 5.62755 16.9127 5.81563C16.9954 6.19062 17.1391 6.70416 17.3845 7.26199C17.7144 8.01206 18.2384 8.86326 19.0607 9.55579C17.0401 9.99925 14.8926 10.2566 12.6051 10.2566C10.3048 10.2566 8.09223 10.0079 6.02854 9.55701C6.8517 8.86427 7.37612 8.01251 7.70622 7.26199C7.95157 6.70416 8.09526 6.19062 8.178 5.81563C8.2195 5.62755 8.24602 5.47268 8.2624 5.36243C8.2706 5.30726 8.27628 5.26313 8.28003 5.23144L8.28429 5.19337L8.28548 5.18163L8.28587 5.17764L8.28601 5.17613L8.28612 5.17493C8.28792 5.15521 8.28882 5.13542 8.28882 5.11562V3.27259C8.28882 2.91224 7.9967 2.62012 7.63634 2.62012C7.27599 2.62012 6.98387 2.91224 6.98387 3.27259V5.08021C6.98152 5.09987 6.9776 5.13041 6.97162 5.17065C6.9592 5.25425 6.93798 5.3791 6.9037 5.53446C6.83488 5.84638 6.71487 6.27468 6.5117 6.73661C6.21276 7.4163 5.7459 8.14395 5.01595 8.69551V3.27259C5.01595 2.91224 4.72383 2.62012 4.36348 2.62012C4.00313 2.62012 3.711 2.91224 3.711 3.27259V9.79994ZM5.07811 10.6771C5.49397 13.5245 7.94611 15.711 10.9089 15.711H14.1817C17.1451 15.711 19.5977 13.5236 20.0127 10.6753C17.7122 11.2321 15.2481 11.5615 12.6051 11.5615C9.96132 11.5615 7.42409 11.246 5.07811 10.6771Z"
          fill="currentColor"
        />
        <path
          d="M2.48375 15.3853C2.13031 15.3151 1.78683 15.5446 1.71655 15.898C1.64628 16.2515 1.87582 16.595 2.22926 16.6652C3.31581 16.8813 4.3553 17.4253 5.20388 18.3039C6.05417 19.1842 6.53988 20.1801 6.77409 21.2713C6.84972 21.6236 7.19664 21.848 7.54897 21.7723C7.90129 21.6967 8.12561 21.3498 8.04998 20.9975C7.76898 19.6883 7.17596 18.4672 6.1425 17.3973C5.10733 16.3255 3.82836 15.6527 2.48375 15.3853Z"
          fill="currentColor"
        />
        <path
          d="M1.55945 18.9418C1.67037 18.5989 2.03824 18.4109 2.38109 18.5218C2.99976 18.722 3.5665 19.0719 4.05028 19.5728C4.63153 20.1746 5.00109 20.9126 5.16167 21.6852C5.235 22.038 5.00844 22.3835 4.65563 22.4568C4.30282 22.5302 3.95736 22.3036 3.88403 21.9508C3.7709 21.4065 3.51255 20.8944 3.11167 20.4794C2.77433 20.1301 2.39114 19.8966 1.97939 19.7634C1.63653 19.6525 1.44852 19.2846 1.55945 18.9418Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconCarBlindSpotThin = (
  { size, className }: Props,
  ref: React.ForwardedRef<HTMLSpanElement>
) => {
  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
      }}
    >
      <SVG />
    </span>
  );
};
export default React.forwardRef(IconCarBlindSpotThin);
