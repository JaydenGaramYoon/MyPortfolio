import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import auth from './auth-helper';
const PrivateRoute = ({ children, ...rest }) => {
    const location = useLocation();  // 현재 페이지 주소 저장
    
    return auth.isAuthenticated() ? (  // 로그인했나 확인
        children                       // 로그인했으면 → MyPage 컴포넌트 렌더링
    ) : (
        <Navigate                      // 로그인 안했으면 → Login 페이지로 이동
            to="/signin"
            state={{ from: location }}  // 원래 가려던 페이지 주소를 기억해둠
            replace
        />
    );
};
export default PrivateRoute;

