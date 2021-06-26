import { OneTableHead } from "./Table/OneTableHead";
import { SingleRow } from "./Table/SingleRow";

export const Table = ({title,tableHeads,map}) => {
  return (
    <div className="card-box mb-30">
      <h2 className="h4 pd-20">{title}</h2>
      <div
        id="DataTables_Table_0_wrapper"
        className="dataTables_wrapper dt-bootstrap4 no-footer"
      >
        <div className="row">
          <div className="col-sm-12 col-md-6"></div>
          <div className="col-sm-12 col-md-6"></div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table
              className="data-table table nowrap dataTable no-footer dtr-inline"
              role="grid"
            >
              <thead>
                <tr role="row">
                  {
                      tableHeads?.map((a,b)=>
                        <OneTableHead key={b} {...a} />
                      )
                  }
                </tr>
              </thead>
              <tbody>
                  {
                    map?.map((a,b)=>
                      <SingleRow key={b} object={a} />
                    )
                  }
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-5"></div>
          <div className="col-sm-12 col-md-7"></div>
        </div>
      </div>
    </div>
  );
};
