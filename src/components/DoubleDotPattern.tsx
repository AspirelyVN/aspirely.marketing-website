export default function DoubleDotPattern() {
  const size = 5;
  const gap = 20;
  const dotRadius = 3.5;
  const padding = 10;

  const renderDots = (offsetX: number, offsetY: number) => {
    return Array.from({ length: size }).flatMap((_, row) =>
      Array.from({ length: size }).map((_, col) => (
        <circle
          key={`${offsetX}-${offsetY}-${row}-${col}`}
          cx={offsetX + col * gap}
          cy={offsetY + row * gap}
          r={dotRadius}
          fill="white"
        />
      ))
    );
  };

  return (
    <div className="absolute -left-12 bottom-0 w-[250px] h-[250px] z-10 pointer-events-none not-md:hidden">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 200 200`}
        preserveAspectRatio="xMinYMin meet"
      >
        {renderDots(padding, padding)}
        {renderDots(60 + padding, 100 + padding)}
      </svg>
    </div>
  );
}