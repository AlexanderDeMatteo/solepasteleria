export function KawaiiSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <circle cx="50" cy="50" r="25" />
      <g>
        <rect x="48" y="5" width="4" height="15" rx="2" />
        <rect x="48" y="5" width="4" height="15" rx="2" transform="rotate(45 50 50)" />
        <rect x="48" y="5" width="4" height="15" rx="2" transform="rotate(90 50 50)" />
        <rect x="48" y="5" width="4" height="15" rx="2" transform="rotate(135 50 50)" />
        <rect x="48" y="5" width="4" height="15" rx="2" transform="rotate(180 50 50)" />
        <rect x="48" y="5" width="4" height="15" rx="2" transform="rotate(225 50 50)" />
        <rect x="48" y="5" width="4" height="15" rx="2" transform="rotate(270 50 50)" />
        <rect x="48" y="5" width="4" height="15" rx="2" transform="rotate(315 50 50)" />
      </g>
    </svg>
  );
}
