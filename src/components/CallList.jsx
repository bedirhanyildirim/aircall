import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <CallListItem />
        <Link to="/call">Go to call</Link>
    </div>
  );
};

export default CallList;