import React from "react";
import { NavLink } from 'react-router-dom';
import MyFavorites from "../pages/MyFavorites";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/about">MyFavorites</NavLink>
            <NavLink to="/contact">AcademicSupport</NavLink>
            <NavLink to="/">ClassesDegree</NavLink>
            <NavLink to="/about">ComputingServices</NavLink>
            <NavLink to="/contact">FinancialInformation</NavLink>
            <NavLink to="/">GradesRecords</NavLink>
            <NavLink to="/about">MyFavorites</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
};

export default Navigation;
