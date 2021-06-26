import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
export const AccordionMenu = ({ mapped, title, to, state }) => {
  const [expand, setexpand] = useState(false);
  return (
    <OutsideClickHandler onOutsideClick={() => setexpand(false)}>
      <li
        className={
          Array.isArray(mapped) && mapped.length > 0
            ? "dropdown" + (expand ? " show" : "")
            : null
        }
      >
        {!to ? (
          <div
            className={
              "dropdown-toggle pl-4" +
              (!Array.isArray(mapped) || mapped.length === 0 ? " no-arrow" : "")
            }
            style={{
              cursor:"pointer"
            }}
            onClick={() => setexpand(!expand)}
          >
            <span className="mtext">{title}</span>
          </div>
        ) : (
          <Link className={
              "dropdown-toggle pl-4" +
              (!Array.isArray(mapped) || mapped.length === 0 ? " no-arrow" : "")
            } to={{ pathname: to ?? "", state }}>
            <span className="mtext">{title}</span>
          </Link>
        )}
        {Array.isArray(mapped) && mapped.length > 0 ? (
          <ul
            className="submenu"
            style={{ display: expand ? "block" : "none" }}
          >
            {mapped.map((a, b) => (
              <li key={b}>
                <Link to={a.to}>{a.text}</Link>
              </li>
            ))}
          </ul>
        ) : null}
      </li>
    </OutsideClickHandler>
  );
};
