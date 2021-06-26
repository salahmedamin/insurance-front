export const OnScreen = ({style,...props}) => (
    <div
      className="col-12 d-flex align-items-center justify-content-center"
      style={{ height: "90vh", ...style }}
    >
      {
        props.children  
      }
    </div>
  );