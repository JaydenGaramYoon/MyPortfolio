// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './core/Home'
// // import Home from './components/Home'
// import About from './src/about'
// import Contact from './src/contact'
// import Services from './src/services'
// import Project from './src/project'
// import Layout from './components/Layout'
// import StarRating from './src/counter';
// import Users from './user/Users.jsx'
// import Signup from './user/Signup.jsx'
// import Signin from './lib/Signin.jsx'
// import Profile from './user/Profile.jsx'
// import EditProfile from './user/EditProfile.jsx'


// const withLayout = (Component) => (
//   <React.Fragment>
//     <Layout />
//     <Component />
//   </React.Fragment>
// );

// const MainRouter = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={withLayout(Home)} />
//         <Route path="/about" element={withLayout(About)} />
//         <Route path="/services" element={withLayout(Services)} />
//         <Route path="/project" element={withLayout(Project)} />
//         <Route path="/contact" element={withLayout(Contact)} />
//         <Route path="/counter" element={withLayout(StarRating)} />
//         <Route path="/signup" element={withLayout(Signup)} />
//         <Route path="/signin" element={withLayout(Signin)} />
//         <Route path="/users" element={withLayout(Users)} />
//         {/* <Route
//           path="/user/edit/:userId"
//           element={
//             withLayout(
//               <PrivateRoute>
//                 <EditProfile />
//               </PrivateRoute>
//             )
//           }
//         />
//         <Route path="/user/:userId" element={withLayout(Profile)} /> */}
//       </Routes>
//     </div>
//   );
// };

// export default MainRouter;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import React from 'react'
//import {Route, Routes} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Signin from './lib/Signin.jsx'
import Profile from './user/Profile.jsx'
import Switch from 'react'
import PrivateRoute from './lib/PrivateRoute.jsx'
import EditProfile from './user/EditProfile.jsx'
import MyShops from './shop/MyShops'
import NewShop from './shop/NewShop'
import EditShop from './shop/EditShop'
import Menu from './core/Menu'
function MainRouter() {
  return (
    <div>
      <Menu />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/seller/shops" element={<PrivateRoute><MyShops /></PrivateRoute>} />
        <Route path="/seller/shop/new" element={<PrivateRoute><NewShop /></PrivateRoute>} />
        <Route path="/seller/shop/edit/:shopId" element={<PrivateRoute><EditShop /></PrivateRoute>} />
      </Routes>
    </div>
  );
}
export default MainRouter;


