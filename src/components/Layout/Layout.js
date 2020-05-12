import React from 'react';

import Aux from '../../hoc/_aux';
import classes from './Layout.css'

const layout = (props) => (
        <Aux>
            <div>Toolbar, sidebar, dropbox </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
);

export default layout;