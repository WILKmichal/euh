import { ComponentType } from 'react';
import withPageTitle from './components/PageTitles';
import CategoriePage from './Page/Categorie';
import FoodsPage from './Page/Foods';
import LoginPage from './Page/Login';
import RegisterPage from './Page/Register';
import SubstitutionPage from './Page/Substitution';
import SubstitutionList from './Page/SubstitutionList';


export interface RouteType {
    path: string;
    title: string;
    authenticatedRoute?: boolean;
    component: ComponentType;
    connect: boolean
}



export const routeNames = {
    register: '/register',
    login: '/',
    categorie: '/categorie',
    foods: '/foods/:id',
    substitution: '/substitution/:code',
    SubstitutionList: '/SubstitutionList'
};
// 
const routes: Array<RouteType> = [
    {
        path: routeNames.register,
        title: 'Register',
        component: RegisterPage,
        connect: false
    }, {
        path: routeNames.login,
        title: 'Login',
        component: LoginPage,
        connect: false
    }, {
        path: routeNames.categorie,
        title: 'Categorie',
        component: CategoriePage,
        connect: true
    }, {
        path: routeNames.foods,
        title: 'Categorie',
        component: FoodsPage,
        connect: false
    }, {
        path: routeNames.substitution,
        title: 'Substitution',
        component: SubstitutionPage,
        connect: false
    }, {
        path: routeNames.SubstitutionList,
        title: 'Substitutionlist',
        component: SubstitutionList,
        connect: true
    }
];


const mappedRoutes = routes.map((route) => {
    const title = route.title
        ? `${route.title} • Euh`
        : `Euh`;

    // const requiresAuth = Boolean(route.authenticatedRoute);
    const wrappedComponent = withPageTitle(title, route.component);

    return {
        path: route.path,
        component: wrappedComponent,
        connect: route.connect,
        title: route.title,

    };
});

export default mappedRoutes;