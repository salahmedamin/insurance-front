export const Loading = ({style}) => (
  <div
    className="col-12 d-flex align-items-center justify-content-center"
    style={{ height: "90vh", ...style }}
  >
    <div className="spinner-border" style={{height:75,width: 75}}>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);