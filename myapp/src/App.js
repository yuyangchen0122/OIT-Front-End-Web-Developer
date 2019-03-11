import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import MyFavorites from './pages/MyFavorites';
import AcademicSupport from './pages/AcademicSupport';
import ClassesDegree from './pages/ClassesDegree';
import ComputingServices from './pages/ComputingServices';
import FinancialInformation from './pages/FinancialInformation';
import GradesRecords from './pages/GradesRecords';
import StudentLife from './pages/StudentLife';
import SideBar from './component/SideBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <SideBar>
                <Switch>
                  <Route component={HomePage}/>
                  <Route component={MyFavorites} />
                  <Route component={AcademicSupport} />
                  <Route component={ClassesDegree} />
                  <Route component={ComputingServices} />
                  <Route component={FinancialInformation} />
                  <Route component={GradesRecords} />
                  <Route component={ComputingServices} />
                  <Route component={StudentLife} />
                </Switch>
            </SideBar>
        </BrowserRouter>
    );
  }
}
export default App;
