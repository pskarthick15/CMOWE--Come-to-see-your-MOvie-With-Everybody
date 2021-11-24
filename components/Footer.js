import React, { Component } from "react";
import { Container, Divider, Modal, Button, Label, Icon, Grid } from "semantic-ui-react";
import { clientWeb3 as web3 } from "../utils/web3";
import * as gtag from "../utils/analytics";

class Footer extends Component {

    state = { 
        network: "rinkeby"
    };

    async componentDidMount() { 
        // this.setState({ network: await web3.eth.net.getNetworkType() });
        gtag.pageview(document.location.pathname);
    }

    render() {
        return (
            <Container textAlign="center" style={{ margin: "40px 0" }}>
                <Divider/>
                <Grid columns='equal'>
                    <Grid.Column>
                        <Modal open={this.state.network !== "private" && this.state.network !== "rinkeby"} basic size="small" centered>
                            <h2>Please install Metamask and connect to the Rinkeby network.</h2>
                            <Modal.Content style={{textAlign: "center"}}>
                                <Button as="a" color="orange" inverted href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">Get Metamask Extension</Button>
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                    <Grid.Column>
                        <small>CMOWE &copy; 2021</small>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <Label size="mini" color="grey" as="a" horizontal onClick={event => this.props.toggleSidebar()} title={this.props.feesCollected[0]}><Icon name="user outline" /> Admin: {this.props.feesCollected[1]}</Label>
                    </Grid.Column>
                </Grid>    
            </Container>
        );
    }
}

export default Footer;