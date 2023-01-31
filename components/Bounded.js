import clsx from "clsx";

export const Bounded = ({
  as: Comp = "div",
  yPadding = "base",
  collapsible = true,
  className,
  children,
}) => {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        "px-6 py-20 md:py-32",
        yPadding === "sm" && "py-5 md:py-7",
        yPadding === "base" && "py-20 md:py-32",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
};
