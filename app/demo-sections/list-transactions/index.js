import * as React from "react";
import {VortexTransactionsList} from 'vort_x-components';
import {Panel} from "react-bootstrap";

class TxContainer extends React.Component {
    render() {
        if (this.props.tx) {
            let status = "warning";
            let status_title;
            switch (this.props.tx.status.type) {
                case 'BROADCASTED':
                    status = "primary";
                    status_title = "Transaction has been broadcasted";
                    break;
                case 'CONFIRMED':
                    status = "success";
                    status_title = "Transaction has been confirmed " + this.props.tx.status.transaction_confirmation_count + " times";
                    break;
                case 'RECEIPT':
                    status = "success";
                    status_title = "Transaction receipt has been received";
                    break ;
                case 'ERROR':
                    status = "danger";
                    status_title = "Error occured while doing transaction";
                    break ;
                default:
                    status = "danger";
                    break ;
            }
            return <Panel bsStyle={status}>
                <Panel.Heading>{this.props.tx.status.transaction_hash}</Panel.Heading>
                <Panel.Body>
                    <h4>{status_title}</h4>
                    <p>Transaction
                        from {this.props.tx.transaction_arguments.from} to {this.props.tx.transaction_arguments.to} for {parseInt(this.props.tx.transaction_arguments.value, 16)} WΞI</p>
                </Panel.Body>
            </Panel>;
        } else
            return <div/>;
    }
}

export class ListTransactions extends React.Component {

    render() {
        return <Panel>
            <Panel.Heading>Example #2: Very REACTive data !</Panel.Heading>
            <Panel.Body style={{maxHeight: 400, overflow: 'scroll'}}>
                <VortexTransactionsList element={TxContainer}/>
            </Panel.Body>
        </Panel>
    }

}
