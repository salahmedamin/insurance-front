import { Link } from "react-router-dom";
export const Option = ({
  to,
  className,
  text,
  title,
  redirect = true,
  isSelected = false,
  onClick = () => undefined,
}) => {
  return (
    <Link
      to={redirect ? to : "#"}
      className={`col-xl-3 mb-30`}
      onClick={onClick}
    >
      <div
        className={`card-box height-100-p widget-style1${
          isSelected ? " bg-secondary text-light" : ""
        }`}
      >
        <div className="d-flex flex-wrap align-items-center">
          <div className="widget-data p-4">
            <div className={`h4 mb-0${isSelected ? " text-light" : ""}`}>
              {title}
            </div>
            <div className={`weight-600 font-16 ${className ?? ""}`}>
              {text}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
