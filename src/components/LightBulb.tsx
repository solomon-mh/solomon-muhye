export const LightBulb = ({ isOn = false }) => (
  <svg
    width="48"
    height="64"
    viewBox="0 0 48 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bulb glass (corrected orientation) */}
    <path
      d="M24 64C32.8 64 40 56.8 40 48C40 41.6 36 36.4 30.4 34V30C30.4 27.6 28.4 25.6 26 25.6H22C19.6 25.6 17.6 27.6 17.6 30V34C12 36.4 8 41.6 8 48C8 56.8 15.2 64 24 64Z"
      fill={isOn ? "#FFF8C2" : "#F0F0F0"}
      stroke="#D0D0D0"
      strokeWidth="0.5"
    />

    {/* Internal components */}
    <g fill={isOn ? "#555" : "#AAA"}>
      {/* Support wires */}
      <path d="M24 20L16 34" stroke="currentColor" strokeWidth="0.5" />
      <path d="M24 20L32 34" stroke="currentColor" strokeWidth="0.5" />
      <path d="M16 34L32 34" stroke="currentColor" strokeWidth="0.5" />

      {/* Filament mount */}
      <circle
        cx="24"
        cy="34"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </g>

    {/* Glowing filament (only when on) */}
    {isOn && (
      <>
        <path
          d="M24 30C22.4 30 21.2 31.2 21.2 32.8C21.2 34.4 22.4 35.6 24 35.6C25.6 35.6 26.8 34.4 26.8 32.8C26.8 31.2 25.6 30 24 30Z"
          fill="#FFD700"
        />
        <path
          d="M24 32L24 34"
          stroke="#FFA500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 33L26 33"
          stroke="#FFA500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    )}

    {/* Base of bulb */}
    <path
      d="M22 25.6H26V0H22V25.6Z"
      fill="#E0E0E0"
      stroke="#C0C0C0"
      strokeWidth="0.5"
    />
    <path d="M20 20H28V16H20V20Z" fill="#C0C0C0" />

    {/* Screw threads */}
    <path d="M20 16H28V12H20V16Z" fill="#A0A0A0" />
    <path d="M20 12H28V8H20V12Z" fill="#C0C0C0" />
    <path d="M20 8H28V4H20V8Z" fill="#A0A0A0" />

    {/* Light rays (only when on) */}
    {isOn && (
      <defs>
        <filter id="bulbGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <radialGradient
          id="bulbLight"
          cx="24"
          cy="48"
          r="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFF8C2" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFF8C2" stopOpacity="0" />
        </radialGradient>
      </defs>
    )}

    {isOn && (
      <>
        {/* Soft glow */}
        <circle
          cx="24"
          cy="48"
          r="20"
          fill="url(#bulbLight)"
          filter="url(#bulbGlow)"
        />

        {/* Light rays */}
        <path
          d="M0 48L8 48"
          stroke="#FFF8C2"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#bulbGlow)"
        />
        <path
          d="M40 48L48 48"
          stroke="#FFF8C2"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#bulbGlow)"
        />
        <path
          d="M24 64L24 56"
          stroke="#FFF8C2"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#bulbGlow)"
        />
        <path
          d="M12 58L16 54"
          stroke="#FFF8C2"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#bulbGlow)"
        />
        <path
          d="M32 54L36 58"
          stroke="#FFF8C2"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#bulbGlow)"
        />
      </>
    )}
  </svg>
);
