// import { signout } from "./api-auth.js";
// const auth = {
//     isAuthenticated() { //로그인 한 상태인가?
//         if (typeof window == "undefined") return false; //윈도우창이 닫겨있으면 false를 반환
//         //sessionStorage에 jwt가 있는지 확인
//         if (sessionStorage.getItem("jwt"))
//             return JSON.parse(sessionStorage.getItem("jwt")); //sessionStorage에 jwt가 있으면 true를 반환
//         else return false; //sessionStorage에 jwt가 없으면 false를 반환
//     },
//     authenticate(jwt, cb) { //로그인 정보 저장해라 - JWT 자격 증명, jwt 및 콜백 함수, cb를 인수로 사용
//         if (typeof window !== "undefined") //sessionStorage에 액세스할 수 있는지 확인
//             sessionStorage.setItem("jwt", JSON.stringify(jwt)); //sessionStorage에 자격 증명을 저장
//         cb(); //저장 후 실행할 함수
//     },
//     clearJWT(cb) { //로그아웃해라
//         if (typeof window !== "undefined") sessionStorage.removeItem("jwt"); //윈도우 닫혀있으면 jwt를 제거
//         cb(); //optional, 저장 후 실행할 함수
//         signout().then((data) => { //서버에 로그아웃 요청
//             document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; //쿠키를 제거
//         });
//     },
// };
// export default auth;

import { signout } from './api-auth.js'
const auth = {
    isAuthenticated() {
        if (typeof window == "undefined")
            return false
        if (sessionStorage.getItem('jwt'))
            return JSON.parse(sessionStorage.getItem('jwt'))
        else
            return false
    },
    authenticate(jwt, cb) {
        if (typeof window !== "undefined")
            sessionStorage.setItem('jwt', JSON.stringify(jwt))
        cb()
    },
    clearJWT(cb) {
        if (typeof window !== "undefined")
            sessionStorage.removeItem('jwt')
        cb()
        //optional
        signout().then((data) => {
            document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        });
    },
    updateUser(user, cb) {
        if (typeof window !== "undefined") {
            if (sessionStorage.getItem("jwt")) {
                let auth = JSON.parse(sessionStorage.getItem("jwt"));
                auth.user = user;
                sessionStorage.setItem("jwt", JSON.stringify(auth));
                cb();
            }
        }
    },
};
export default auth


