import React,{useContext} from 'react';

import {Button, Image, Segment, Embed, Container, Header, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { UserContext } from '../components/userContext';
import Cookies from 'js-cookie';

const LandingPage = () => {
    const {setUser} = useContext(UserContext);
    if (Cookies.get("login") == null) {
        setUser(null)
      } else {
        setUser("true")
      }
    return(
        <div className="LandingPage">
                    <Segment>
                        <Grid stackable columns={2}>
                            <Grid.Column>
                            <Segment>
                                <Embed
                                    id='O6Xo21L0ybE'
                                    source='youtube'
                                />
                            </Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment>
                            <Container fluid textAlign='center'>
                                    <Header as="h1">Header</Header>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam in arcu. Proin sed libero enim sed faucibus turpis in. Mauris commodo quis imperdiet massa tincidunt. Vestibulum lorem sed risus ultricies. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Tortor consequat id porta nibh. Duis ut diam quam nulla porttitor massa id. Sapien faucibus et molestie ac feugiat sed. Nunc mi ipsum faucibus vitae aliquet nec. Cursus metus aliquam eleifend mi in nulla posuere. Vulputate mi sit amet mauris. Dictum varius duis at consectetur lorem donec massa sapien.
                                </Container>
                            </Segment>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                <Segment.Group>
                    <Segment>
                        <Grid celled>
                            <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Container fluid textAlign='center'>
                                    <Header as="h2">Header</Header>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    </p>
                                    <p>
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Container>
                            </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Container fluid>
                                    <Header as="h2">Header</Header>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam in arcu. Proin sed libero enim sed faucibus turpis in. Mauris commodo quis imperdiet massa tincidunt. Vestibulum lorem sed risus ultricies. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Tortor consequat id porta nibh. Duis ut diam quam nulla porttitor massa id. Sapien faucibus et molestie ac feugiat sed. Nunc mi ipsum faucibus vitae aliquet nec. Cursus metus aliquam eleifend mi in nulla posuere. Vulputate mi sit amet mauris. Dictum varius duis at consectetur lorem donec massa sapien.
                                    </p>
                                </Container>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment>
                        <Grid>
                            <Grid.Row>
                            <Grid.Column width={8}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <Container fluid>
                                    <Header as="h2">Header</Header>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Tortor posuere ac ut consequat semper viverra nam. Odio facilisis mauris sit amet. Nec sagittis aliquam malesuada bibendum. Urna id volutpat lacus laoreet non curabitur. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Sed libero enim sed faucibus turpis in eu mi. Neque egestas congue quisque egestas diam in. Praesent semper feugiat nibh sed pulvinar proin gravida. Odio facilisis mauris sit amet massa vitae tortor. Proin nibh nisl condimentum id venenatis a condimentum vitae. Lorem ipsum dolor sit amet consectetur adipiscing. Diam maecenas ultricies mi eget mauris pharetra et. Nulla facilisi cras fermentum odio eu feugiat. Vitae tempus quam pellentesque nec nam aliquam sem et tortor.
                                    </p>
                                </Container>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment>
                        <Grid>
                            <Grid.Row>
                            <Grid.Column width={8}>
                            <Container fluid>
                                    <Header as="h2">Header</Header>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Elementum curabitur vitae nunc sed. Non odio euismod lacinia at quis risus. Nec ullamcorper sit amet risus nullam eget. Faucibus a pellentesque sit amet. Malesuada bibendum arcu vitae elementum curabitur vitae. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Dolor magna eget est lorem ipsum dolor. Libero enim sed faucibus turpis in eu mi bibendum. Massa massa ultricies mi quis hendrerit dolor magna. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Scelerisque varius morbi enim nunc faucibus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Felis eget nunc lobortis mattis aliquam faucibus purus in. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Consequat interdum varius sit amet mattis.
                                    </p>
                                    <Button></Button>
                                </Container>
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <Container fluid>
                                    <Header as="h2">Header</Header>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Pellentesque sit amet porttitor eget dolor morbi non arcu. Nunc consequat interdum varius sit amet mattis vulputate enim. Sed lectus vestibulum mattis ullamcorper velit sed. Vitae justo eget magna fermentum. Netus et malesuada fames ac. Est ultricies integer quis auctor elit sed vulputate mi sit. Id faucibus nisl tincidunt eget nullam non nisi est sit. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. At lectus urna duis convallis convallis. Vehicula ipsum a arcu cursus vitae congue mauris. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Eget nulla facilisi etiam dignissim. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Dis parturient montes nascetur ridiculus. Interdum posuere lorem ipsum dolor sit amet consectetur. Vitae auctor eu augue ut lectus. Sed blandit libero volutpat sed cras ornare arcu.
                                    </p>
                                    <Button></Button>
                                </Container>
                            </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                            <Grid.Column width={8}>
                            <Container fluid>
                                    <Header as="h2">Header</Header>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Mauris a diam maecenas sed enim ut sem viverra. Nulla porttitor massa id neque aliquam. Est pellentesque elit ullamcorper dignissim cras. Risus at ultrices mi tempus imperdiet nulla malesuada. Nisl tincidunt eget nullam non nisi. Tincidunt tortor aliquam nulla facilisi. Convallis aenean et tortor at risus viverra. Ut lectus arcu bibendum at varius. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Eu lobortis elementum nibh tellus molestie nunc.
                                    </p>
                                    <Button></Button>
                                </Container>
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <Container fluid>
                                    <Header as="h2">Header</Header>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum at. 
                                        Proin libero nunc consequat interdum varius sit amet mattis. Et leo duis ut diam quam nulla 
                                        porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat. Ipsum nunc aliquet 
                                        bibendum enim facilisis gravida neque convallis a. Sed lectus vestibulum mattis ullamcorper 
                                        velit sed ullamcorper. Purus sit amet volutpat consequat mauris nunc. Magna eget est lorem 
                                        ipsum dolor. Scelerisque fermentum dui faucibus in ornare quam viverra. Vivamus at augue 
                                        eget arcu dictum varius. Donec massa sapien faucibus et molestie ac feugiat sed. Quam nulla
                                        porttitor massa id neque aliquam vestibulum morbi. Ornare aenean euismod elementum nisi 
                                        quis eleifend.
                                    </p>
                                    <Button></Button>
                                </Container>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment>
                        <Grid>
                            <Grid.Row>
                            <Grid.Column width={8}>
                                <Container fluid>
                                    <Header as="h2">Header</Header>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Urna condimentum mattis pellentesque id nibh tortor. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. At urna condimentum mattis pellentesque id nibh. Vitae tempus quam pellentesque nec nam aliquam sem. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus mauris a diam maecenas. Ac tortor dignissim convallis aenean et tortor at risus viverra. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Velit egestas dui id ornare arcu odio ut sem nulla.
                                    </p>
                                </Container>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    <Segment>
                    <Grid stackable columns={2}>
                        <Grid.Column>
                        <Segment>
                            <Container fluid>
                                    <Header as="h2">Header</Header>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus. Sed arcu non odio euismod. Volutpat sed cras ornare arcu dui. Elementum nibh tellus molestie nunc non blandit massa enim nec. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Justo eget magna fermentum iaculis eu. Vitae semper quis lectus nulla. A arcu cursus vitae congue mauris rhoncus aenean vel. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Cras tincidunt lobortis feugiat vivamus. Senectus et netus et malesuada fames. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Orci dapibus ultrices in iaculis nunc sed augue lacus. Nisl purus in mollis nunc sed id semper risus in. Purus ut faucibus pulvinar elementum integer enim. Risus nec feugiat in fermentum posuere urna nec tincidunt. Nulla aliquet enim tortor at auctor urna nunc id.
                                    </p>
                            </Container>
                        </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <Link to='/register'>
                                    <Button>Sign-up</Button>
                                </Link>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    </Segment>
                </Segment.Group>
            </div>
    );
}
export default LandingPage;