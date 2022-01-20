import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CallListItem = () => {
    const calls = useSelector((state) => state.allCalls.calls)

    const getCallName = (direction, from, to) => {
        if (direction === 'outbound') {
            return to
        } else {
            return from
        }
    }

    const getDirection = (direction, call_type) => {
        if (call_type === 'missed' && direction === 'outbound') {
            return (<span className="material-icons">call_missed_outgoing</span>)
        } else if (call_type === 'missed' && direction === 'inbound') {
            return (<span className="material-icons">call_made</span>)
        }else if (call_type === 'voicemail') {
            return (<span className="material-icons">voicemail</span>)
        } else if (direction === 'outbound') {
            return (<span className="material-icons">call_made</span>)
        } else if (direction === 'inbound') {
            return (<span className="material-icons">call_received</span>)
        }
    }

    const getDate = (created_at) => {
        const date = new Date(created_at);
        return date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear();
    }

    const renderList = calls.map((call) => {
        const {id, direction, is_archived, call_type, created_at, from, to, via, duration} = call;
        return (
            <Link to={`/call/${id}`} key={id}>
                <div className="call_list_item">
                    <div className="pp">
                        <span className="material-icons-outlined">account_circle</span>
                    </div>
                    <div className="info">
                        <span className="name">{getCallName(direction, from, to)}</span>
                        <span className="direction">{getDirection(direction, call_type)} {getDate(created_at)}</span>
                        <span className="via">{via}</span>
                    </div>
                    <span className="call material-icons-outlined">call</span>
                </div>
            </Link>
        )
    })


    return (
        <div>{renderList}</div>
    );
};

export default CallListItem;