import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';

function MenuBar(props) {
  const { user, logout } = useContext(AuthContext);

  return (
    <Menu color='teal'>
      <Menu.Item
        name={(user && user.username) || 'Inicio'}
        as={NavLink}
        exact
        to='/'
        replace />
      { user
        ? <React.Fragment>
            <Menu.Item
              name='MisEventos'
              as={NavLink}
              to='/eventos'
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='cerrar sesion'
                onClick={logout}
              />
            </Menu.Menu>
          </React.Fragment>

        : <Menu.Menu position='right'>
            <Menu.Item
              name='Acceder'
              as={NavLink}
              to='/login'
              replace
            />
            <Menu.Item
              name='Registrarse'
              as={NavLink}
              to='/register'
              replace
            />
          </Menu.Menu>
      }
    </Menu>
  )
}

export default React.memo(MenuBar);