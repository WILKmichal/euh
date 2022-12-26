import { ComponentType } from 'react';
import withPageTitle from './components/PageTitles';
import LoginPage from './Page/Login';
import RegisterPage from './Page/Register';


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

};

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
    }
];


const mappedRoutes = routes.map((route) => {
    const title = route.title
        ? `${route.title} • GetPassword`
        : `GetPassword`;

    const requiresAuth = Boolean(route.authenticatedRoute);
    const wrappedComponent = withPageTitle(title, route.component);

    return {
        path: route.path,
        component: wrappedComponent,
        authenticatedRoute: requiresAuth
    };
});

export default mappedRoutes;