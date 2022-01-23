import React from "react";
import CallListItem from "./CallListItem.jsx";
import {useDispatch, useSelector} from "react-redux";

const Archives = () => {
    const calls = useSelector((state) => state.allCalls.archivedCalls);

    return (
        <div id="archives">
            <CallListItem type="archived"/>
            {calls.length > 0 ? (
                <div className="archiveAll">
                    <span>Unarchive all calls ({calls.length})</span>
                </div>
            ) : (
                <div className="archiveAll">
                    <span>Archive is empty</span>
                </div>
            )}
        </div>
    )
}

export default Archives;