// Premium card wrapper with consistent border, radius and hover glow.
export function PremiumCard({
  children,
  tone = "light",
  className = "",
  as: Tag = "div",
  ...rest
}) {
  return (
    <Tag className={`premium-card premium-card--${tone} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
