export default function GradientUnderline({ width = 173 }) {
  return (
    <svg 
      width={width} 
      height="2" 
      viewBox="0 0 173 2" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full"
    >
      <path d="M173 2H0V0H173V2Z" fill="url(#paint0_linear_274_2180)"/>
      <defs>
        <linearGradient 
          id="paint0_linear_274_2180" 
          x1="56.8052" 
          y1="-14.3841" 
          x2="108.597" 
          y2="34.6302" 
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.10351" stopColor="#2D2D8F"/>
          <stop offset="0.49143" stopColor="#006FBA"/>
          <stop offset="0.93697" stopColor="#21FCEB"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
