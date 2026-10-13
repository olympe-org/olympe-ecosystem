export default function LinkIcon({ label }) {
  const isCode = label.toLowerCase().includes("code");

  if (isCode) {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        <path d="M5 3L1 7l4 4" />
        <path d="M9 3l4 4-4 4" />
      </svg>
    );
  }

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M2 12L12 2M12 2H4M12 2V10" />
    </svg>
  );
}
