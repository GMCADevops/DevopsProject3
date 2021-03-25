import React, {useContext} from 'react'
import {Link, useHistory} from "react-router-dom";
import { Menu, Button, Image } from 'semantic-ui-react'
import { UserContext } from '../components/userContext';
import logo from './Logo.png'
import Cookies from 'js-cookie';

const NavBar = () => {

  const {user,setUser} = useContext(UserContext);
  const history = useHistory();

  const onLogout = () => {
    Cookies.remove("login")
    Cookies.remove("id")
    setUser(null)
    history.push("/")
  }
      return (
        <Menu>
            <Menu.Item header>
                <Link to="/">
                  <Image as='div' src={logo} size='tiny' />
                </Link>
            </Menu.Item>
            <Menu.Item
              name='Features'
            />
            <Menu.Item
              name='Pricing'
            />
            <Menu.Item
              name='Community'
            />
            <Menu.Item
              name='Support'
            />
            {user ? (
              <Menu.Menu position='right'>
              <Menu.Item>
                    <Button onClick={onLogout}>logout</Button>
              </Menu.Item>
              <Menu.Item>
                    <Link to="/profile">
                      <Button>account</Button>
                    </Link>
              </Menu.Item>
          </Menu.Menu>
            ) : (
              <Menu.Menu position='right'>
              <Menu.Item>
                <Link to="/login">
                      <Button>Login</Button>
                    </Link>
              </Menu.Item>
              <Menu.Item>
                    <Link to="/register">
                      <Button>Sign-Up</Button>
                    </Link>
              </Menu.Item>
          </Menu.Menu>
            )
            }
          </Menu>);
        }
  export default NavBar;