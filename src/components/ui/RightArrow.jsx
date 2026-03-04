export default function RightArrow({
  width = 13,
  height = 23,
  color = "white",
  className = "",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12.6076 10.4893C12.9381 10.8721 12.9381 11.4426 12.6076 11.8255L12.5319 11.9048L1.72493 22.0358C1.07067 22.6489 -1.14441e-05 22.1851 -1.14441e-05 21.2884L-1.14441e-05 1.02637C-1.14441e-05 0.129656 1.07067 -0.334165 1.72493 0.278945L12.5319 10.4099L12.6076 10.4893ZM1.31763 1.70234L1.31763 20.6124L11.4036 11.1574L1.31763 1.70234Z"
        fill={color}
      />
    </svg>
  );
}