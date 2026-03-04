export default function PageContainer({ children, className = "", style }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] ${className}`}
      style={{
        paddingLeft: "var(--page-gutter)",
        paddingRight: "var(--page-gutter)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}