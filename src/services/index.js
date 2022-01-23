import axios from "axios";

export async function getAllCalls() {
    return await axios.get("https://aircall-job.herokuapp.com/activities")
        .catch(console.log)
        .then(res => res.data)
}

export async function getCall(id) {
    return await axios.get("https://aircall-job.herokuapp.com/activities/" + id)
        .catch(console.log)
        .then(res => res.data)
}