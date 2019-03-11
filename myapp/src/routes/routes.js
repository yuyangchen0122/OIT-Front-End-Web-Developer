import { Home, ContentPaste, Notifications, AccountCircle } from '@material-ui/icons';
import HomePage from '../pages/HomePage';
import AcademicSupport from '../pages/AcademicSupport';
import CampusSevices from '../pages/CampusSevices';
import ClassesDegree from '../pages/Classes&Degree';
import ComputingServices from '../pages/ComputingServices';
import FinancialInformation from '../pages/FinancialInformation';
import GradesRecords from '../pages/Grades&Records';
import StudentLife from '../pages/StudentLife';
import MyFavorites from '../pages/MyFavorites';

const Routes = [
    {
        path: '/dashboard/home',
        sidebarName: 'Home',
        navbarName: 'Home',
        // icon: Home,
        component: HomePage
    },
    {
        path: '/dashboard/CampusSevices',
        sidebarName: 'CampusSevices',
        navbarName: 'CampusSevices',
        // icon: CampusSevices,
        component: CampusSevices
    },
    {
        path: '/dashboard/AcademicSupport',
        sidebarName: 'AcademicSupport',
        navbarName: 'AcademicSupport',
        // icon: AccountCircle,
        component: AcademicSupport
    },
    {
        path: '/dashboard/ClassesDegree',
        sidebarName: 'ClassesDegree',
        navbarName: 'ClassesDegree',
        // icon: ClassesDegree,
        component: ClassesDegree
    },
    {
        path: '/dashboard/ComputingServices',
        sidebarName: 'ComputingServices',
        navbarName: 'ComputingServices',
        // icon: ComputingServices,
        component: ComputingServices
    },
    {
        path: '/dashboard/FinancialInformation',
        sidebarName: 'FinancialInformation',
        navbarName: 'FinancialInformation',
        // icon: FinancialInformation,
        component: FinancialInformation
    },
    {
        path: '/dashboard/GradesRecords',
        sidebarName: 'GradesRecords',
        navbarName: 'GradesRecords',
        // icon: AccountCircle,
        component: GradesRecords
    },
    {
        path: '/dashboard/StudentLife',
        sidebarName: 'StudentLife',
        navbarName: 'StudentLife',
        // icon: StudentLife,
        component: StudentLife
    },
    {
        path: '/dashboard/MyFavorites',
        sidebarName: 'MyFavorites',
        navbarName: 'MyFavorites',
        // icon: MyFavorites,
        component: MyFavorites
    }
];

export default Routes;
