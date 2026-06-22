// Pure-CSS 3D wireframe sphere — a lightweight stand-in for a WebGL globe.
// No second canvas, so it never competes for a GPU context and stays fast.
export default function Sphere3D({ className = "" }: { className?: string }) {
  const rings = 9;
  return (
    <div className={`sphere-stage ${className}`} aria-hidden>
      <div className="sphere">
        {/* glowing core */}
        <span className="sphere-core" />
        {/* longitude rings rotated around the Y axis */}
        {Array.from({ length: rings }).map((_, i) => (
          <span
            key={i}
            className="sphere-ring"
            style={{ transform: `rotateY(${(180 / rings) * i}deg)` }}
          />
        ))}
        {/* two latitude rings for depth */}
        <span className="sphere-ring lat" style={{ transform: "rotateX(90deg) scale(0.86)" }} />
        <span className="sphere-ring lat" style={{ transform: "rotateX(90deg) translateZ(46px) scale(0.6)" }} />
        <span className="sphere-ring lat" style={{ transform: "rotateX(90deg) translateZ(-46px) scale(0.6)" }} />
      </div>
    </div>
  );
}
