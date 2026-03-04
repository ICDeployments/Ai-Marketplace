export default function Divider({ className = "" }) {
  return (
    <span className={`inline-flex items-center h-[18px] text-[#D0D0CE] ${className}`}>
      |
    </span>
  );
}