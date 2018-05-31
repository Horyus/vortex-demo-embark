import React, { Component} from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import {Panel, Button} from 'react-bootstrap';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import {VortexFeedList, FeedType} from 'vort_x-components';

class ListElement extends Component {
    constructor(props) {
        super(props);
        this.title = "";
        this.body = "";
        this.style = "danger";
        switch (this.props.data.action) {
            case 'NEW_CONTRACT':
                this.title = "New Contract";
                this.body = "Contract " + this.props.data.contract_name + " at address " + this.props.data.contract_address + " has been loaded.";
                this.style = "primary";
                break;
            case 'NEW_TRANSACTION':
                this.title = "New Transaction";
                this.body = "Transaction " + this.props.data.transaction_hash + " has been broadcasted";
                this.style = "success";
                break;
            case 'NEW_ERROR':
                this.title = "New Error";
                this.body = this.props.data.error.message;
                break;
            case 'NEW_ACCOUNT':
                this.title = "New Account";
                this.body = "Following accounts.md " + this.props.data.account;
                this.style = "primary";
                break;
            default:
                this.title = "Unknown action";
        }

    }
    render() {
        return <Panel bsStyle={this.style}>
            <Panel.Heading>{this.title}</Panel.Heading>
            <Panel.Body style={{wordWrap: 'break-word'}}>
                <p>{this.body}</p>
            </Panel.Body>
        </Panel>
    }
}

export class Overlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {
        return <Panel>
            <Panel.Heading >Example #5: Press this magic button !</Panel.Heading>
            <Panel.Body>
                <p>You can easily access all the data created by your user activity. This is a great tool to give more informations to the user about what is happening behind the scene.</p>
                <div ref={ref => this.el = ref}>
                    <Button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                        This is the Magic Button, press me if you want to see puuuuuure magic
                    </Button>
                    <SlidingPane
                        isOpen={ this.state.isPaneOpenLeft }
                        title='VortΞx Transaction Summary'
                        from='left'
                        width={(Math.floor(window.innerWidth * 0.3)).toString() + "px"}
                        onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                        <VortexFeedList filter={FeedType.Contracts | FeedType.Errors | FeedType.Transactions | FeedType.Accounts } element={ListElement}/>
                    </SlidingPane>
                </div>
            </Panel.Body>
        </Panel>;
    }
}
