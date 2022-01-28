import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Nopage from './Components/Nopage/Nopage';
import AddService from './Components/AddService/AddService';
import Services from './Components/Services/Services';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import AuthProvider from './contex/AuthProvider';
import AllOrder from './Components/AllOrders/AllOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageAlls from './Components/ManageAlls/ManageAlls';
import Register from './Components/Register/Register';
import AddRating from './Components/AddRating/AddRating';
import Ratings from './Components/Ratings/Ratings';
import DashBoard from './Components/DashBoard/DashBoard';
import ServicesSlice from './Components/ServicesSlice/ServicesSlice';
import MyOrders from './Components/MyOrders/MyOrders';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <div className="App">


      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>


            <Route path="/home">
              <Home></Home>
            </Route>


            <Route path="/contact">
              <Contact></Contact>
            </Route>



            <Route path="/products">
              <Services></Services>
            </Route>


            <Route path="/serviceSlice">
              <ServicesSlice></ServicesSlice>
            </Route>


            <Route path="/ratings">
              <Ratings></Ratings>
            </Route>



            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/allorder">
              <AllOrder></AllOrder>
            </Route>


            <Route path="/manageAll">
              <ManageAlls></ManageAlls>
            </Route>


            <Route path="/orders">
              <MyOrders></MyOrders>
            </Route>

            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>


            <PrivateRoute path="/addrating">
              <AddRating></AddRating>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>


            <PrivateRoute path="/booking/:userId">
              <Booking></Booking>
            </PrivateRoute>



            <Route path="*">
              <Nopage></Nopage>
            </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
