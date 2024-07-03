import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { networkData } from "../store/atomsAsync";

export default function LinkedInTopBarComponentAsync() {
    const mynetworkData = useRecoilValue(networkData);

    return (
        <>
            <button>Home</button>
            <button>My Network - {handleCountLogic(mynetworkData.network)}</button>
            <button>Notifications - {handleCountLogic(mynetworkData.notifications)}</button>
            <button>Jobs - {handleCountLogic(mynetworkData.jobs)}</button>
            <button>Messages - {handleCountLogic(mynetworkData.messaging)}</button>
        </>
    );
}

function handleCountLogic(value) {
    if (value > 99) return "99+";
    return value;
}
