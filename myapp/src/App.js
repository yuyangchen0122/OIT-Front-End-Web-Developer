import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import MyFavorites from './pages/MyFavorites';
import AcademicSupport from './pages/AcademicSupport';
import ClassesDegree from './pages/ClassesDegree';
import ComputingServices from './pages/ComputingServices';
import FinancialInformation from './pages/FinancialInformation';
import GradesRecords from './pages/GradesRecords';
import StudentLife from './pages/StudentLife';
import PersistentDrawerLeft from './component/SideBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <PersistentDrawerLeft>
                    <Switch>
                        <Route exact path="HomePage" component={HomePage}/>
                        <Route path="MyFavorites" component={MyFavorites} />
                        <Route path="AcademicSupport" component={AcademicSupport} />
                        <Route path="ClassesDegree" component={ClassesDegree} />
                        <Route path="ComputingServices" component={ComputingServices} />
                        <Route path="FinancialInformation" component={FinancialInformation} />
                        <Route path="GradesRecords" component={GradesRecords} />
                        <Route path="ComputingServices" component={ComputingServices} />
                        <Route path="StudentLife" component={StudentLife} />
                    </Switch>
                </PersistentDrawerLeft>
            </div>
        </BrowserRouter>
        );
    }
}

export default App;
