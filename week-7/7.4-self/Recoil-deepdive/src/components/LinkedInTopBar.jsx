import { useMemo } from "react";
import { MyNetwork, Notifications, Jobs, Messages, TotalCatchUps } from "../store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export default function LinkedInTopBarComponent() {
    const [mynetwork, setMyNetwork] = useRecoilState(MyNetwork);
    const [notification, setNotification] = useRecoilState(Notifications);
    const [jobs, setJobs] = useRecoilState(Jobs);
    const [messages, setMessages] = useRecoilState(Messages);
    const totalCatchUps = useRecoilValue(TotalCatchUps);

    function incrementState(setRecoilProp) {
        setRecoilProp(prop => prop + 1); // We can ignore passing the state value and incrementing by 1 by using the arrow fn syntax
    }

    const totalLookUps = useMemo(() => {
        return mynetwork + notification + jobs + messages;
    }, [mynetwork, notification, jobs, messages]);

    return (
        <>
            <button>Home</button>

            <button onClick={() => incrementState(setMyNetwork)}>My Network - {handleCountLogic(mynetwork)}</button>
            <button onClick={() => incrementState(setNotification)}>Notifications - {handleCountLogic(notification)}</button>
            <button onClick={() => incrementState(setJobs)}>Jobs - {handleCountLogic(jobs)}</button>
            <button onClick={() => incrementState(setMessages)}>Messages - {handleCountLogic(messages)}</button>

            <button>Profile - {handleCountLogic(totalCatchUps)}</button>
            <button>Memo - {totalLookUps}</button>
        </>
    );
}

function handleCountLogic(value) {
    if (value > 99) return "99+";
    return value;
}
