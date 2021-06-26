import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import readXlsxFile,{parseExcelDate} from "read-excel-file";
import { employeesRedux } from "../../../../asyncRequests/employees/needs/reduxDispatch";
import { cookies } from "../../../../cookies";
import { Loading } from "../../../../Loading";

const offers = [
  {
    name: "advanced",
    refund: "80%",
    limit: 800,
  },
  {
    name: "pro",
    refund: "70%",
    limit: 500,
  },
  {
    name: "basic",
    refund: "50%",
    limit: 400,
  },
];


// const schema = {
//   'matricule': {
//     prop: 'matricule',
//     type: Number,
//     required: true
//   },
//   'nom': {
//     prop: 'nom',
//     type: String,
//     required: true
//   },
//   'prenom': {
//     prop: 'prenom',
//     type: String,
//     required: true
//   },
//   'sexe':{
//     prop: 'sexe',
//     required: true,
//     oneOf: [
//       'homme',
//       'Homme',
//       'Male',
//       'male',
//       'F',
//       'f',
//       'm',
//       'M',
//       'H',
//       'h',
//       'Femme',
//       'femme',
//     ]
//   },
//   'dateNaiss': {
//     prop: 'dateNaiss',
//     required: true,
//     type: String
//   },
// }

const struct = [
  {
    value: "matricule",
    check: (e) => e !== null && String(e).length === 8 && parseInt(e),
  },
  {
    value: "nom",
    check: (e) => e !== null && /[a-zA-Z ]/.test(e),
  },
  {
    value: "prenom",
    check: (e) => e !== null && /[a-zA-Z ]/.test(e),
  },
  {
    value: "dateNaiss",
    check: (e) => e !== null && (new Date(e)) !== {},
  },
  {
    value: "sexe",
    check: (e) =>
      e !== null &&
      ["homme", "femme", "h", "f", "m", "male"].includes(e?.toLowerCase()),
  },
];

const AddContract = ({ entID, entMatFiscal }) => {
  const history = useHistory()
  const [list, setlist] = useState(null);
  const [loading, setloading] = useState(false)
  const { register, handleSubmit } = useForm();
  const errorInit = {
    excel: {
      value: true,
      message: "",
    },
    radio: {
      value: true,
      message: "",
    },
  };
  const [error, seterror] = useState(errorInit);
  const [offer, setoffer] = useState("");

  const uploadFile = (e) => {
    readXlsxFile(e.target.files[0] ).then((rows) => {
      const mapped = rows.map((row) => {
        let rr = {}, i = 0;
        for (const strct of struct) {
          if (!row[i]) {
            seterror((e) => ({
              ...e,
              excel: {
                value: true,
                message:
                  "This spreadsheet contains too much information, use what's required",
              },
            }));
            return;
          }
          if (!strct.check(row[i])) {
            seterror((e) => ({
              ...e,
              excel: {
                value: true,
                message:
                  "The required format for each employee in excel file is not met",
              },
            }));
            return;
          }
          if(strct.value === "dateNaiss"){
            rr[strct.value] = parseExcelDate(row[i])
          }
          else{
            rr[strct.value] = row[i];
          }
          i++;
          seterror((e) => ({ ...e, excel: { value: false, message: "" } }));
        }
        return rr;
      });
      setlist(mapped);
    });
  };

  const onSub = async (data) => {
    if (!offer) {
      seterror((e) => ({
        ...e,
        radio: {
          value: true,
          message: "Please select one from the following offers",
        },
      }));
    } else {
      seterror((e) => ({
        ...e,
        radio: {
          value: false,
          message: "",
        },
      }));
    }
    if (error.excel.value) {
      if (!error.excel.message) {
        seterror((e) => ({
          ...e,
          excel: {
            ...e.excel,
            message: "Please select a file to import employees from",
          },
        }));
      }
    }
    if (error.excel.value || error.radio.value) return;
    else seterror(errorInit);
    setloading(true)
    const sendAxiosOne = await axios.post(
      process.env.REACT_APP_ENDPOINT+"/contract/create",
      { ...data, offer, entID, entMatFiscal },
      {
        headers: {
          authorization: cookies.getCookie("token"),
        },
      }
    );
    const sendAxiosTwo = await axios.post(
        process.env.REACT_APP_ENDPOINT+"/contract/addInsuredList",
        { list, contractUnique: sendAxiosOne.data.unique },
        {
          headers: {
            authorization: cookies.getCookie("token"),
          },
        }
      );
      if(sendAxiosTwo.data.success){
        employeesRedux([])
        history.push("/dashboard/view/contracts")
      }
      else seterror(e=>({...e,excel:{value:true,message:sendAxiosTwo.data.message}}))
  };
  return (
    <div className="pd-20 card-box mb-30 position-relative">
      {loading ? (
        <Loading
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            zIndex:2,
            background:"rgb(255,255,255,.8)"
          }}
        />
      ) : null}
      <div className="clearfix mb-4">
        <div className="pull-left">
          <h4 className="text-dark h4">SIGN NEW CONTRACT</h4>
        </div>
      </div>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSub)}>
        {Object.keys(error).find((a) => error[a].value && error[a].message) ? (
          <div className="w-100 d-flex mb-4 justify-content-around">
            {Object.keys(error)
              .filter((a) => error[a].value && error[a].message)
              .map((a) => (
                <div className="btn btn-outline-danger col-4">
                  {error[a].message}
                </div>
              ))}
          </div>
        ) : null}
        <div className="form-group row">
          <label className="col-sm-12 col-md-2 col-form-label">Period</label>
          <div className="col-sm-12 col-md-10">
            <select
              {...register("periodInYears", { required: true })}
              className="custom-select col-12"
              defaultValue="1"
            >
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-6 col-sm-12">
            <label className="weight-600">Offer</label>
            <div
              className="custom-control custom-radio mb-5"
              onClick={() => {
                setoffer("advanced");
                seterror((e) => ({
                  ...e,
                  radio: {
                    value: false,
                    message: "",
                  },
                }));
              }}
            >
              <input
                type="radio"
                className="custom-control-input"
                value={offer}
                checked={offer === "advanced"}
                readOnly
              />
              <label className="custom-control-label">ADVANCED</label>
            </div>
            <div
              className="custom-control custom-radio mb-5"
              onClick={() => {
                setoffer("pro");
                seterror((e) => ({
                  ...e,
                  radio: {
                    value: false,
                    message: "",
                  },
                }));
              }}
            >
              <input
                type="radio"
                className="custom-control-input"
                value={offer}
                checked={offer === "pro"}
                readOnly
              />
              <label className="custom-control-label">PRO</label>
            </div>
            <div
              className="custom-control custom-radio mb-5"
              onClick={() => {
                setoffer("basic");
                seterror((e) => ({
                  ...e,
                  radio: {
                    value: false,
                    message: "",
                  },
                }));
              }}
            >
              <input
                type="radio"
                className="custom-control-input"
                value={offer}
                checked={offer === "basic"}
                readOnly
              />
              <label className="custom-control-label">BASIC</label>
            </div>
          </div>
        </div>
        {offer ? (
          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <label>Refund percentage</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={offers.find((a) => a.name === offer).refund}
                  disabled
                />
              </div>
              <div className="col-6">
                <label>Yearly limit</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={offers.find((a) => a.name === offer).limit}
                  disabled
                />
              </div>
            </div>
          </div>
        ) : null}

        <div className="form-group">
          <label>Import employees list (.xlsx)</label>
          <div className="custom-file mb-2">
            <input
              type="file"
              className="custom-file-input"
              onChange={uploadFile}
            />
            <label className="custom-file-label">Choose file</label>
          </div>
          <small className="form-text text-muted">
            The file must contain for each employee, their ID, first and last
            name, birth date and gender.
          </small>
        </div>
        <div className="clearfix my-3">
          <div className="pull-right">
            <input
              type="submit"
              className="btn btn-outline-dark"
              disabled={Object.keys(error).find((a) => error[a].value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default connect((state) => ({
  entID: state.auth.id,
  entMatFiscal: state.auth.matFiscal,
}))(AddContract);
