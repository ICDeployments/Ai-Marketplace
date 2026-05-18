export default function GradientUnderline({ width = "100%" }) {
  return (
    <div
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: "2px",
        background:
          "linear-gradient(124deg, #2D2D8F 10.351%, #006FBA 49.143%, #21FCEB 93.697%)",
      }}
    />
  );
}
