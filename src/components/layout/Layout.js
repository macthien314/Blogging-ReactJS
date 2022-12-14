import React, { Fragment } from 'react';
import { ScrollButton } from '../button';
import Header from './Header';

const Layout = ({children}) => {
    return (
        <Fragment>
            <Header></Header>
            {children}
            <ScrollButton></ScrollButton>
        </Fragment>
    );
};

export default Layout;