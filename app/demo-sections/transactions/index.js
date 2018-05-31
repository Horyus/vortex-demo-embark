import * as React from "react";
import {Panel, HelpBlock, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {connect} from 'vort_x-components';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}
class _TransactionPanel extends React.Component {

    constructor(props) {
        super(props);
        this.sendTx = this.sendTx.bind(this);
    }

    sendTx(event) {
        event.preventDefault();
            this.props.web3._.eth.vortexSendTransaction({
                from: this.props.web3.coinbase,
                to: this.txTo.value,
                value: this.txVal.valueAsNumber
            }).catch(e => {
               console.log(e);
            })

    }

    render() {
        return (<Panel>
            <Panel.Heading>Example #1: Send some transaction !</Panel.Heading>
            <Panel.Body>
                <div>
                    <p>You can send some transactions for here. You will see any component connected on transactions update instantly when new transactions are emitted, or when your transactions update their states. You can install the <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr">Redux DevTools</a> to visualize live changes in the state ! Don't be afraid to create errored transaction to see what happens in the store !</p>
                    <form onSubmit={this.sendTx}>
                        <FieldGroup
                            id="txTo"
                            type="text"
                            label="Destination Address"
                            placeholder="Enter address"
                            inputRef={input => this.txTo = input}
                        />
                        <FieldGroup
                            id="txVal"
                            type="number"
                            label="Transaction Value"
                            placeholder="Enter value"
                            inputRef={input => this.txVal = input}
                        />
                        <Button type="submit">Send !</Button>
                    </form>
                </div>
            </Panel.Body>
        </Panel>);
    }

}

const mapStateToProps = (state) => {
    return {
        web3: state.web3
    }
};

export const TransactionPanel = connect(_TransactionPanel, mapStateToProps);

