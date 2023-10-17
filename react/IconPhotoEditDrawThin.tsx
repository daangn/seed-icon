import * as React from 'react';
import type { SVGProps } from 'react';
interface Props {
  size?: number | string;
  className?: string;
}
const SVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.3.11"
    width="100%"
    height="100%"
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0234 3.92526C10.7528 4.49593 9.30394 5.54471 7.92429 6.92436C5.63621 9.21244 4.40606 12.6888 4.08574 14.1303C4.01386 14.4537 3.69335 14.6577 3.36987 14.5858C3.04639 14.5139 2.84243 14.1934 2.91432 13.8699C3.26066 12.3114 4.56385 8.58774 7.07577 6.07583C8.52568 4.62591 10.0917 3.47739 11.5318 2.8306C12.933 2.20128 14.4009 1.96996 15.4787 2.69818C15.7684 2.89393 15.9768 3.15536 16.1282 3.40027C16.8226 4.52338 16.7626 5.58603 16.4266 6.49249C16.166 7.19554 15.7224 7.8366 15.3843 8.32502C15.3111 8.4309 15.2428 8.5296 15.1824 8.62021C14.9011 9.04208 14.4069 9.59701 13.8479 10.1998C13.6132 10.4528 13.3666 10.7148 13.1114 10.9858C12.7371 11.3834 12.3443 11.8005 11.9439 12.2377C11.2774 12.9654 10.6202 13.7162 10.0693 14.4393C9.51375 15.1685 9.09017 15.8391 8.8666 16.4072C8.70872 16.8084 8.73429 17.0721 8.79251 17.209C8.84036 17.3216 8.93936 17.423 9.16701 17.458C9.68981 17.5383 10.7924 17.216 12.2539 15.7545C12.6381 15.3704 13.0079 14.9947 13.3627 14.6344C14.3685 13.6127 15.2524 12.7149 15.9939 12.0995C16.4931 11.6852 16.9919 11.3421 17.4733 11.1896C17.7227 11.1105 17.9934 11.074 18.269 11.1256C18.5517 11.1785 18.7975 11.3165 19.0003 11.5193C19.4454 11.9643 19.4943 12.5495 19.3865 13.0797C19.281 13.5989 19.0115 14.1597 18.678 14.7173C18.0337 15.7944 17.0376 17.039 16.0821 18.233C16.0442 18.2804 16.0063 18.3277 15.9686 18.3749C15.4901 18.9729 15.2233 19.4429 15.1062 19.7819C15.0483 19.9496 15.0342 20.0648 15.0363 20.1355C15.0373 20.1694 15.042 20.1901 15.0453 20.2008C15.0469 20.2061 15.0484 20.2094 15.0492 20.2111C15.05 20.2128 15.0506 20.2136 15.0508 20.2138L15.0522 20.2155C15.0531 20.2164 15.055 20.2181 15.0584 20.2206C15.0653 20.2256 15.0801 20.2348 15.1072 20.2448C15.164 20.2658 15.2632 20.2859 15.4184 20.283C15.7327 20.2771 16.1884 20.1785 16.7772 19.943C18.728 19.1627 19.817 18.3346 20.0758 18.0758C20.3101 17.8415 20.69 17.8415 20.9243 18.0758C21.1586 18.3101 21.1586 18.69 20.9243 18.9244C20.5164 19.3322 19.2721 20.2375 17.2229 21.0572C16.5617 21.3217 15.9549 21.4731 15.441 21.4828C14.9413 21.4922 14.3981 21.3646 14.0743 20.9113C13.7522 20.4605 13.7972 19.896 13.972 19.3901C14.1517 18.8698 14.5099 18.2772 15.0315 17.6253C15.0591 17.5907 15.0867 17.5562 15.1143 17.5218C16.0958 16.2951 17.0469 15.1065 17.6481 14.1013C17.9586 13.5822 18.1456 13.1602 18.2106 12.8406C18.2733 12.5321 18.2067 12.4227 18.1518 12.3678C18.1046 12.3206 18.0724 12.3096 18.0482 12.3051C18.0168 12.2992 17.9517 12.2968 17.8358 12.3335C17.5863 12.4126 17.2356 12.6283 16.7603 13.0228C16.069 13.5967 15.2497 14.4287 14.2629 15.431C13.8994 15.8 13.5133 16.1922 13.1024 16.6031C11.5639 18.1416 10.0918 18.8141 8.98478 18.6441C8.39751 18.5538 7.91782 18.2188 7.68815 17.6785C7.46884 17.1626 7.51806 16.5571 7.74994 15.9678C8.03397 15.246 8.53605 14.4716 9.11473 13.7121C9.69806 12.9464 10.3836 12.1647 11.0589 11.4272C11.4602 10.9891 11.869 10.5549 12.251 10.149C12.5052 9.87891 12.7476 9.62141 12.968 9.38379C13.5393 8.7678 13.9651 8.2827 14.1839 7.95457C14.2649 7.83313 14.3478 7.71262 14.4308 7.5921C14.7647 7.10731 15.0987 6.62229 15.3014 6.0754C15.5357 5.44357 15.5702 4.77969 15.1075 4.03132C15.0101 3.8737 14.9093 3.76168 14.8069 3.6925C14.2716 3.33085 13.3329 3.33712 12.0234 3.92526Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const IconPhotoEditDrawThin = (
  { size = 24, className }: Props,
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
export default React.forwardRef(IconPhotoEditDrawThin);
