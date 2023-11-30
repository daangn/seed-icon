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
          d="M10.9954 16.8697L14.4238 13.4297C14.5792 13.3022 14.7764 13.237 14.9771 13.2468C15.1779 13.2567 15.3678 13.3409 15.5099 13.4831C15.652 13.6253 15.7362 13.8153 15.7461 14.0161C15.7559 14.217 15.6908 14.4143 15.5633 14.5697L11.5651 18.5697C11.4123 18.7176 11.208 18.8002 10.9954 18.8002C10.7828 18.8002 10.5785 18.7176 10.4257 18.5697L8.42661 16.5697C8.2991 16.4143 8.23394 16.217 8.2438 16.0161C8.25366 15.8153 8.33783 15.6253 8.47995 15.4831C8.62208 15.3409 8.81198 15.2567 9.01273 15.2468C9.21347 15.237 9.41071 15.3022 9.56608 15.4297L10.9954 16.8697Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.8607 2.84997L23.1096 8.63997C23.1957 8.84411 23.24 9.06342 23.24 9.28497C23.24 9.50652 23.1957 9.72583 23.1096 9.92997C22.7513 10.8038 22.1109 11.5325 21.2905 12V20.5C21.2879 20.9766 21.0975 21.4329 20.7606 21.7699C20.4238 22.1069 19.9677 22.2973 19.4913 22.3H4.49838C4.02203 22.2973 3.56593 22.1069 3.22909 21.7699C2.89225 21.4329 2.70185 20.9766 2.69923 20.5V12C1.86826 11.5224 1.22616 10.7741 0.880083 9.87997C0.719985 9.48215 0.719985 9.03779 0.880083 8.63997L3.12903 2.84997C3.259 2.5103 3.48932 2.21831 3.7893 2.01287C4.08928 1.80742 4.44471 1.69828 4.80824 1.69997H19.1815C19.545 1.69828 19.9004 1.80742 20.2004 2.01287C20.5004 2.21831 20.7307 2.5103 20.8607 2.84997ZM4.35703 20.6414C4.39452 20.6789 4.44536 20.7 4.49838 20.7H19.4913C19.5444 20.7 19.5952 20.6789 19.6327 20.6414C19.6702 20.6039 19.6912 20.553 19.6912 20.5V12.29C19.208 12.263 18.737 12.1276 18.3132 11.894C17.8893 11.6603 17.5233 11.3342 17.2424 10.94C16.9463 11.3609 16.5533 11.7044 16.0967 11.9415C15.64 12.1786 15.1331 12.3024 14.6186 12.3024C14.1041 12.3024 13.5972 12.1786 13.1406 11.9415C12.6839 11.7044 12.291 11.3609 11.9949 10.94C11.6987 11.3609 11.3058 11.7044 10.8492 11.9415C10.3925 12.1786 9.88558 12.3024 9.37109 12.3024C8.85661 12.3024 8.34967 12.1786 7.89303 11.9415C7.43639 11.7044 7.04344 11.3609 6.74733 10.94C6.46639 11.3342 6.10044 11.6603 5.67655 11.894C5.25267 12.1276 4.7817 12.263 4.29848 12.29V20.5C4.29848 20.553 4.31954 20.6039 4.35703 20.6414ZM17.992 8.99997C17.992 9.08997 18.5318 10.7 19.8712 10.7C20.275 10.6565 20.6575 10.4962 20.9717 10.2387C21.2859 9.98117 21.5183 9.63757 21.6403 9.24997L19.3714 3.42997C19.3558 3.39215 19.3296 3.35971 19.2958 3.33661C19.2621 3.31352 19.2224 3.30078 19.1815 3.29997H4.80824C4.76737 3.30078 4.72763 3.31352 4.69389 3.33661C4.66015 3.35971 4.63389 3.39215 4.61833 3.42997L2.36938 9.21997C2.48062 9.61369 2.70988 9.96381 3.02624 10.2231C3.34259 10.4824 3.73082 10.6383 4.13855 10.67C5.49791 10.67 5.99768 8.99997 5.99768 8.99997C6.05026 8.83992 6.15201 8.70055 6.28841 8.60176C6.42482 8.50296 6.58892 8.44977 6.75732 8.44977C6.92572 8.44977 7.08982 8.50296 7.22623 8.60176C7.36263 8.70055 7.46438 8.83992 7.51696 8.99997C7.53696 9.08997 8.02672 10.67 9.37609 10.67C10.7255 10.67 11.2252 8.99997 11.2252 8.99997C11.2725 8.83217 11.3733 8.68441 11.5122 8.57918C11.6511 8.47394 11.8206 8.417 11.9949 8.417C12.1691 8.417 12.3386 8.47394 12.4775 8.57918C12.6165 8.68441 12.7172 8.83217 12.7645 8.99997C12.7845 9.08997 13.2343 10.7 14.6136 10.7C15.993 10.7 16.4528 8.99997 16.4528 8.99997C16.5 8.83217 16.6008 8.68441 16.7397 8.57918C16.8787 8.47394 17.0481 8.417 17.2224 8.417C17.3967 8.417 17.5661 8.47394 17.7051 8.57918C17.844 8.68441 17.9448 8.83217 17.992 8.99997Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const IconMarketCheckRegular = (
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
export default React.forwardRef(IconMarketCheckRegular);
