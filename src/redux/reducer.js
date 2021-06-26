import { combineReducers } from "redux";
import { auth } from "./reducers/auth";
import { bulletins } from "./reducers/bulletins";
import { contracts } from "./reducers/contracts";
import { currentContract } from "./reducers/currentContract";
import { currentBulletin } from "./reducers/currentBulletin";
import { employees } from "./reducers/employees";
import { subinsured } from "./reducers/subinsured";
import { global } from "./reducers/global";
import { medical_acts } from "./reducers/medicalActs";

export const reducer = combineReducers({global,auth,bulletins,currentBulletin,contracts,currentContract,employees,subinsured,medical_acts})