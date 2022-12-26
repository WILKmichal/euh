import { ComponentType } from 'react';
import withPageTitle from './components/PageTitles';
import Register from './components/Register';


export interface RouteType {
    path: string;
    title: string;
    authenticatedRoute?: boolean;
    component: ComponentType;
}



export const routeNames = {
    register: '/register',
};

const routes: Array<RouteType> = [
    {
        path: routeNames.register,
        title: 'Home',
        component: Register
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