import * as React from "react";
import {VortexAccount, connect} from "vort_x-components";
import {Panel} from "react-bootstrap";

export class DataContainer extends React.Component {
    render() {
        return (<Panel>
            <Panel.Heading>{this.props.address}</Panel.Heading>
            <Panel.Body>Balance: {this.props.account ? this.props.account.balance + " WEI" : "Loading ..."}</Panel.Body>
        </Panel>);
    }
}

export class _AccountFollower extends React.Component {
    render() {
        return (<div>
            <VortexAccount element={DataContainer} account_address={this.props.web3.coinbase}/>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        web3: state.web3
    }
};

export const AccountFollower = connect(_AccountFollower, mapStateToProps);
