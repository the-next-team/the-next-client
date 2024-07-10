import Tippy from "@tippyjs/react";
import "tippy.js/animations/perspective-extreme.css";
import "tippy.js/animations/perspective-subtle.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale-extreme.css";
import "tippy.js/animations/scale-subtle.css";
import "tippy.js/animations/scale.css";
import "tippy.js/animations/shift-away-extreme.css";
import "tippy.js/animations/shift-away-subtle.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/shift-toward-extreme.css";
import "tippy.js/animations/shift-toward-subtle.css";
import "tippy.js/animations/shift-toward.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/light.css";

type Props = {
  children?: React.ReactElement<any>;
  content?: any;
  title?: string | undefined;
  className?: string | undefined;
  trigger?: string | undefined;
  theme?: string | undefined;
  animation?: string | undefined;
  placement?: any;
  arrow?: boolean;
  allowHTML?: boolean;
  interactive?: boolean;
  maxWidth?: number | string;
  duration?: number;
};

function Tooltip({
  children,
  content = "content",
  title,
  className = "btn btn-dark",
  placement = "top",
  arrow = true,
  theme = "dark",
  animation = "shift-away",
  trigger = "mouseenter focus",
  interactive = false,
  allowHTML = false,
  maxWidth = 300,
  duration = 200,
}: Props) {
  return (
    <div className="custom-tippy">
      <Tippy
        content={content}
        placement={placement}
        arrow={arrow}
        theme={theme}
        animation={animation}
        trigger={trigger}
        interactive={interactive}
        allowHTML={allowHTML}
        maxWidth={maxWidth}
        duration={duration}
      >
        {children ? children : <button className={className}>{title}</button>}
      </Tippy>
    </div>
  );
}

export default Tooltip;
