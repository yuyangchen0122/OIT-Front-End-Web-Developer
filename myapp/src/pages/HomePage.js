import React, { Component } from 'react';
import PrimaryAppBar from '../component/Header';
import Sidebar from '../component/SideBar';


class HomePage extends Component {
    render() {
        return (
            <div>
                <PrimaryAppBar/>
                <Sidebar/>
                <h2>Hello</h2>

            </div>
        );
    }
}
export default HomePage;
