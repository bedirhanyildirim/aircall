import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllCalls } from "../services";
import { setCalls, arthiveAll } from "../redux/actions";
import CallListItem from "./CallListItem.jsx";

const CallList = () => {
    const calls = useSelector((state) => state.allCalls.calls)
    const dispatch = useDispatch();

    const fetchCalls = async () => {
        const response = await getAllCalls();
        dispatch(setCalls(response));
    }

    const archiveAll = () => {
        const archivedCalls = [...calls];
        archivedCalls.forEach(call => {
            call.is_archived = true;
        });
        dispatch(arthiveAll(archivedCalls));
    }

    useEffect(() => {
        fetchCalls();
    }, []);

    return (
    <div id="call_list">
        <CallListItem />
        {calls.length > 0 ? (
            <div className="archiveAll" onClick={archiveAll}>
                <span>Archive all calls</span>
            </div>
        ) : (
            <div></div>
        )}
    </div>
  );
};

export default CallList;