import cx from "classnames";

interface InlineIconProps {
  icon: JSX.Element;
  direction: "left" | "right";
}

export const InlineIcon: React.FC<InlineIconProps> = ({ icon, direction }) => {
  const classes = cx(
    "absolute bottom-0 top-0 flex items-center pointer-events-none duration-500",
    { "left-2": direction === "left", "right-2": direction === "right" }
  );

  return <span className={classes}>{icon}</span>;
};
