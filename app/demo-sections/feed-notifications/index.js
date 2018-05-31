import * as React from "react";
import NotificationSystem from "react-notification-system";
import {connect} from 'vort_x-components';

class _FeedNotifications extends React.Component {

    constructor(props) {
        super(props);
        this.initialRender = false;
        this.notified = 0;
        this._notificationSystem = null;
    }

    shouldComponentUpdate(nextProps) {
        if (this.notified < nextProps.feed.length && this._notificationSystem) {
            for (let start_idx = this.notified; start_idx < nextProps.feed.length; ++start_idx) {
                switch (nextProps.feed[start_idx].action) {
                    case 'NEW_ERROR':
                        this._notificationSystem.addNotification({position: 'br', title: 'Error at ' + nextProps.feed[start_idx].error.when, message: nextProps.feed[start_idx].error.message, level: 'error'});
                        break ;
                    case 'NEW_CONTRACT':
                        this._notificationSystem.addNotification({position: 'br', title: 'Loaded Smart Contract', message: nextProps.feed[start_idx].contract_name + " at address " + nextProps.feed[start_idx].contract_address, level: 'info'});
                        break ;
                    case 'NEW_TRANSACTION':
                        this._notificationSystem.addNotification({position: 'br', title: 'New Transaction Broadcasted', message: nextProps.feed[start_idx].transaction_hash, level: 'success'});
                        break ;
                    default:
                        break ;
                }
            }
            this.notified = nextProps.feed.length;
        }
        return !this.initialRender;
    }

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    render() {
        this.initialRender = true;
        const style = {
            NotificationItem: {
                DefaultStyle: {
                    wordWrap: 'break-word'
                }

            }
        };
        return (<div>
            <NotificationSystem ref="notificationSystem" style={style}/>
            <div>
                {this.props.children}
            </div>
        </div>)
    }

}

const mapStateToProps = (state) => {
    return {
        feed: state.feed
    }
};

export const FeedNotifications = connect(_FeedNotifications, mapStateToProps);
