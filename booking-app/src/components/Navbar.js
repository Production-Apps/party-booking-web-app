// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/login">Login</NavLink>
//       <NavLink to="/store">Store</NavLink>
//     </div>
//   );
// };
// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '@material-ui/icons/Home';
import PersonPin from '@material-ui/icons/PersonPin';
import Store from '@material-ui/icons/Store';

const Navbar = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="Home" icon={<Home />} component={Link} to="/" />
        <Tab label="Login" icon={<PersonPin />} component={Link} to="/login" />
        <Tab
          label="Store"
          icon={<Store />}
          component={Link}
          to="/store"
          textColor="primary"
        />
      </Tabs>
    </Paper>
  );
};

export default Navbar;
