// import { createBulletinAjax } from "../../../../asyncRequests/bulletin/ajax"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { viewBulletinDispatch } from "../../../../asyncRequests/bulletin/dispatch";
import { viewBulletinRedux } from "../../../../asyncRequests/bulletin/needs/reduxDispatch";

const payment = {
  recu: [
    {
      text: "Reçu",
      value: "id",
    },
  ],
  cheque: [
    {
      text: "Num Cheque",
      value: "numCh",
    },
    {
      text: "Bank",
      value: "bank",
    },
  ],
  virement: [
    {
      text: "Virement Num",
      value: "numVir",
    },
    {
      text: "Compte Num",
      value: "numComp",
    },
  ],
};

export const ViewBulletin = ({ unique }) => {
  const {
    assure,
    date,
    contract,
    intervenant,
    insured,
    statut,
    montant,
    actemedical,
    remboursement,
  } = useSelector((state) => state.currentBulletin);
  useEffect(() => {
    (async () => await viewBulletinDispatch(unique))();

    return () => viewBulletinRedux({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>VIEW BULLETIN</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box mb-30">
            <div className="clearfix">
              <div className="pull-left">
                <h4 className="h4">PRIMARY DETAILS</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="form-group">
                  <label>UNIQUE :</label>
                  <input
                    type="text"
                    value={unique}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 pl-md-0">
                <div className="form-group">
                  <label>CREATED:</label>
                  <input
                    type="text"
                    value={`${new Date(date).getDate()}/${new Date(
                      date
                    ).getMonth()}/${new Date(date).getFullYear()}`}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>BENEFICIARY FIRST NAME:</label>
                  <input
                    type="text"
                    value={assure?.nom || insured?.nom}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>BENEFICIARY LAST NAME:</label>
                  <input
                    type="text"
                    value={assure?.prenom || insured?.prenom}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box mb-30 bg-dark">
            <div className="clearfix">
              <div className="pull-left">
                <h4 className="h4" style={{ color: "white" }}>
                  CONTRACT DETAILS
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label style={{ color: "white" }}>UNIQUE :</label>
                  <input
                    type="text"
                    value={contract?.unique}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label style={{ color: "white" }}>EXPIRATION :</label>
                  <input
                    type="text"
                    value={`${new Date(
                      parseInt(contract?.end)
                    ).getDate()}/${new Date(
                      parseInt(contract?.end)
                    ).getMonth()}/${new Date(
                      parseInt(contract?.end)
                    ).getFullYear()}`}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <label style={{ color: "white" }}>ENTERPRISE :</label>
                  <input
                    type="text"
                    value={contract?.entreprise?.nom}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label style={{ color: "white" }}>PLAN :</label>
                  <input
                    type="text"
                    value={contract?.offer?.name?.toUpperCase()}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label style={{ color: "white" }}>PLAN LIMIT :</label>
                  <input
                    type="text"
                    value={contract?.offer?.plafond}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label style={{ color: "white" }}>PLAN RETURNAL :</label>
                  <input
                    type="text"
                    value={contract?.offer?.remboursement + "%"}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p bg-dark">
            <div className="clearfix">
              <div className="pull-left">
                <h4 className="h4" style={{ color: "white" }}>
                  DOCTOR/INTERVENTION DETAILS
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 pr-0">
                <div className="form-group">
                  <label style={{ color: "white" }}>ACT CODE:</label>
                  <input
                    type="text"
                    value={actemedical?.code || "-"}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label style={{ color: "white" }}>ACT NAME :</label>
                  <input
                    type="text"
                    style={{ textTransform: "uppercase" }}
                    value={actemedical?.nom || "-"}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 pl-md-0">
                <div className="form-group">
                  <label style={{ color: "white" }}>PAID :</label>
                  <input
                    type="text"
                    value={montant ? montant + " DT" : "-"}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 pr-0">
                <div className="form-group">
                  <label style={{ color: "white" }}>CNAM :</label>
                  <input
                    type="text"
                    value={intervenant?.CNAM || "-"}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <label style={{ color: "white" }}>FIRST NAME :</label>
                  <input
                    type="text"
                    value={intervenant?.nom || "-"}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-4 pl-md-0">
                <div className="form-group">
                  <label style={{ color: "white" }}>LAST NAME :</label>
                  <input
                    type="text"
                    value={intervenant?.prenom || "-"}
                    readOnly
                    disabled
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <div className="clearfix">
              <div className="pull-left">
                <h4 className="h4">REFUND STATUS</h4>
              </div>
            </div>
            <div className="row">
              <div
                className={
                  statut?.status === -1
                    ? "col-md-6"
                    : statut?.status === 0
                    ? "col-md-12"
                    : "col-md-4"
                }
              >
                <div className="form-group">
                  <label>STATUS :</label>
                  <button
                    type="text"
                    style={{ cursor: "pointer" }}
                    readOnly
                    disabled
                    className={
                      "form-control border  bg-light text-center " +
                      (statut?.status === 1
                        ? "border-success text-success"
                        : statut?.status === 0
                        ? "border-warning text-warning"
                        : "border-danger text-danger")
                    }
                  >
                    {statut?.status === 1
                      ? "SUCCESS"
                      : statut?.status === 0
                      ? "PENDING"
                      : "REJECTED"}
                  </button>
                </div>
              </div>
              {statut?.status === -1 ? (
                <div className="col-md-6">
                  <div className="form-group">
                    <label>CAUSE CODE :</label>
                    <input
                      type="text"
                      value={statut?.reject.code}
                      readOnly
                      disabled
                      className={"form-control btn btn-danger"}
                    />
                  </div>
                </div>
              ) : null}
              {statut?.status === 1 ? (
                <>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label>PAYMENT METHOD :</label>
                      <input
                        type="text"
                        value={Object.keys(remboursement)
                          .filter((a) =>
                            ["virement", "cheque", "recu"].includes(a)
                          )
                          .find((a) => remboursement[a] !== null)
                          ?.toUpperCase()}
                        readOnly
                        disabled
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>AMOUNT :</label>
                      <input
                        type="text"
                        value={
                          montant && contract.offer?.remboursement
                            ? (montant * contract.offer?.remboursement) / 100 +
                              " DT"
                            : "-"
                        }
                        readOnly
                        disabled
                        className="form-control"
                      />
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div className="row">
              {statut?.status === -1 ? (
                <div className="col-md-12">
                  <div className="form-group">
                    <label>REJECTION CAUSE :</label>
                    <p className="text-danger">{statut?.reject?.libelle}</p>
                  </div>
                </div>
              ) : null}
              {statut?.status === 1 &&
              Object.keys(remboursement)
                .filter((a) => ["virement", "cheque", "recu"].includes(a))
                .find((a) => remboursement[a] !== null) ? (
                <>
                  {payment[
                    Object.keys(remboursement)
                      .filter((a) => ["virement", "cheque", "recu"].includes(a))
                      .find((a) => remboursement[a] !== null)
                  ]?.map((a, b) => (
                    <div
                      className={
                        Object.keys(remboursement)
                          .filter((a) =>
                            ["virement", "cheque", "recu"].includes(a)
                          )
                          .find((a) => remboursement[a] !== null) === "recu"
                          ? "col-md-12"
                          : "col-md-6"
                      }
                      key={b}
                    >
                      <div className="form-group">
                        <label>{a?.text} :</label>
                        <input
                          type="text"
                          value={
                            remboursement[
                              Object.keys(remboursement)
                                .filter((a) =>
                                  ["virement", "cheque", "recu"].includes(a)
                                )
                                .find((a) => remboursement[a] !== null)
                            ][a?.value]
                          }
                          readOnly
                          disabled
                          className="form-control"
                        />
                      </div>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
