export default function MiniSpinner({
  size = "sm",
  variant = "primary",
  className = "",
}) {
  const sizeMap = {
    xs: "w-4 h-4",
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const variantMap = {
    primary: "border-primary-600 border-t-transparent",
    muted: "border-green-500 border-t-transparent",
    accent: "border-rose-500 border-t-transparent",
  };

  return (
    <div className={`inline-flex justify-center items-center ${className}`} role="status">
      <span
        className={`inline-block rounded-full animate-spin border-2 ${sizeMap[size]} ${variantMap[variant]}`}
      />
    </div>
  );
}
