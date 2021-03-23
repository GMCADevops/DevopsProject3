import React, { useState, useEffect, useContext } from 'react';
import { Profile } from '../components/Profile';
import {Button, Segment, Grid, GridColumn} from 'semantic-ui-react';
import {useHistory, Link} from 'react-router-dom'
import { UserContext } from '../components/userContext';
import { ProfileForm } from '../components/ProfileForm';
import Cookies from 'js-cookie'
import { ImageUploader } from '../components/ImageUploader';

const ProfilePage = () => {
    const {setUser} = useContext(UserContext);

    const[profiles, setProfiles] = useState([]);
    const [show, toggleShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {

        const response = await fetch("/profile" ,{
            method: 'GET',
            headers : {
                "Authorization": Cookies.get("login")
            }
        })
            if (!response.ok) {
                history.push("/");
                console.error("something went wrong")
            } else {
            let data = await response.json();
            setProfiles(data)
            setUser("true")
            Cookies.set("id", data.id)
            console.log(Cookies.get("id"))
            }
        }
        fetchData(); }, []);
      return(
          <div>
              <Segment>
                <Grid>
                    <Grid.Column width={5}>
                        <Profile profiles={profiles}></Profile>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Button.Group vertical>
                            <Link to="/movies">
                                    <Button>my Movies</Button>
                                </Link>
                            <Button onClick={()=> toggleShow(!show)}>Update User Details</Button>
                            <Button animated='fade'>
                                <Button.Content visible>Sign-up for a Pro account</Button.Content>
                                <Button.Content hidden>$12.99 a month</Button.Content>
                            </Button>
                            <Button>Settings</Button>
                            <Button>Support</Button>
                            <Button negative>Delete Account</Button>
                        </Button.Group>
                    </Grid.Column>
                    {show && <Grid.Column width={8}>
                        <ImageUploader />
                    </Grid.Column>}
                    {show && <Grid.Column width={8}>
                        <ProfileForm/>
                    </Grid.Column>}
                </Grid>
              </Segment>
          </div>
      )
    }
export default ProfilePage;