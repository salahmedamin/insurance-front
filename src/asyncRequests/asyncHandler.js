import {checkTokenDispatch} from "./checkToken/dispatch"
import {loginDispatch} from "./login/dispatch"
import {signupAjax} from "./signup/dispatch"
import {resetPassAjax} from "./resetpass/dispatch"

export const asyncHandler = {
    signup: signupAjax,
    login: loginDispatch,
    resetPass: resetPassAjax,
    checkToken: checkTokenDispatch
}