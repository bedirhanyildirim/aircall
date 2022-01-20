import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { archiveCall } from "../redux/actions";
import { Link } from "react-router-dom";

const CallListItem = () => {
    const calls = useSelector((state) => state.allCalls.calls);
    const dispatch = useDispatch();

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
        return date.getDate() + '.' + ((date.getMonth()+1 < 0) ? ('0' + (date.getMonth()+1)) : date.getMonth()+1) + '.' + date.getFullYear();
    }

    const archiveCallOnClick = (call) => {
        dispatch(archiveCall(call));
    }

    const renderList = calls.map((call) => {
        if (call.is_archived === false) {
            const {id, direction, is_archived, call_type, created_at, from, to, via, duration} = call;
            return (
                <div key={id}>
                    <Link to={'/call/' + id}>
                        <div className="call_list_item">
                            <div className="pp">
                                <span className="material-icons-outlined">account_circle</span>
                            </div>
                            <div className="info">
                                <span className="name">{getCallName(direction, from, to)}</span>
                                <span className="direction">{getDirection(direction, call_type)} {getDate(created_at)}</span>
                                <span className="via">{via}</span>
                            </div>
                            <span>{is_archived.toString()}</span>
                            <span className="archive material-icons-outlined" onClick={(e) => {e.preventDefault(); archiveCallOnClick(call)}}>archive</span>
                            <span className="call material-icons-outlined">call</span>
                        </div>
                    </Link>
                </div>
            )
        }
    })


    return (
        <div>{renderList}</div>
    );
};

export default CallListItem;