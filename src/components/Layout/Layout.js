import React from 'react';

import Aux from '../../hoc/_aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

const layout = (props) => (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
);

export default layout;