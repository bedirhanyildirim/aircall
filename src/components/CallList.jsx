import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCalls } from "../services";
import { setCalls } from "../redux/actions";
import CallListItem from "./CallListItem.jsx";

const CallList = () => {
    const dispatch = useDispatch();

    const fetchCalls = async () => {
        const response = await getAllCalls();
        dispatch(setCalls(response));
    }

    useEffect(() => {
        fetchCalls();
    }, []);

    return (
    <div id="call_list">
      <CallListItem />
    </div>
  );
};

export default CallList;