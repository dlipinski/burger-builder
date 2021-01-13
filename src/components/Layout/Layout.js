import React from 'react';

import classes from './Layout.module.scss';

const layout = (props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawe, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </React.Fragment>
)

export default layout;