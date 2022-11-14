import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const SingleRow = ({ object }) => {
  const [expand, setexpand] = useState(false);
  const ref = useRef();
  const outside = (e) => {
    if (!ref.current?.contains(e.target) && expand) setexpand(false);
  };
  useEffect(() => {
    window.addEventListener("click", outside);
    return () => {
      window.removeEventListener("click", outside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <tr role="row" className="even">
      {Object.keys(object)
        .filter((a) => a !== "viewable" && a !== "action" && a !== "id")
        .map((a, b) => (
          <td key={b}>
            {!object.viewable?.includes(a) ? (
              object[a]
            ) : (
              <Link
                onClick={object[a].onClick}
                to={{ pathname: object[a].to, state: object[a].state }}
                className="dropdown-item"
              >
                <i className="dw dw-eye"></i> Voir
              </Link>
            )}
          </td>
        ))}
      {object.action ? (
        <td>
          <div className={"dropdown" + (expand ? " show" : "")}>
            <div
              className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
              style={{
                cursor: "pointer",
              }}
              onClick={() => setexpand(!expand)}
            >
              <i className="dw dw-more"></i>
            </div>
            <div
              ref={ref}
              className={
                "dropdown-menu dropdown-menu-right dropdown-menu-icon-list" +
                (expand ? " show" : "")
              }
            >
              {object.action === true || object.action.see ? (
                <div
                  style={{ cursor: "pointer" }}
                  className="dropdown-item"
                  onClick={() => {
                    setexpand(false);
                    object.action.see?.onClick();
                  }}
                >
                  <i className="dw dw-eye"></i>{" "}
                  {object.action.see?.text ?? "Voir"}
                </div>
              ) : null}
              {object.action === true || object.action.delete ? (
                <div
                  style={{ cursor: "pointer" }}
                  className="dropdown-item"
                  onClick={() => {
                    setexpand(false);
                    object.action.delete?.onClick();
                  }}
                >
                  <i className="dw dw-delete-3"></i>
                  {object.action.delete.text ?? "Delete"}
                </div>
              ) : null}
            </div>
          </div>
        </td>
      ) : null}
    </tr>
  );
};
