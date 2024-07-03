import { MyNetwork, Notifications, Jobs, Messages } from "../store/atoms";
import { useRecoilState } from "recoil";

export default function LinkedInTopBarComponent() {
    const [mynetwork, setMyNetwork] = useRecoilState(MyNetwork);
    const [notification, setNotification] = useRecoilState(Notifications);
    const [jobs, setJobs] = useRecoilState(Jobs);
    const [messages, setMessages] = useRecoilState(Messages);

    function incrementState(setRecoilProp, prop) {
        setRecoilProp(prop + 1);
    }

    return (
        <>
            <button>Home</button>

            <button onClick={() => incrementState(setMyNetwork, mynetwork)}>My Network - {handleCountLogic(mynetwork)}</button>
            <button onClick={() => incrementState(setNotification, notification)}>Notifications - {handleCountLogic(notification)}</button>
            <button onClick={() => incrementState(setJobs, jobs)}>Jobs - {handleCountLogic(jobs)}</button>
            <button onClick={() => incrementState(setMessages, messages)}>Messages - {handleCountLogic(messages)}</button>

            <button>Profile</button>
        </>
    );
}

function handleCountLogic(value) {
    if (value > 99) return "99+";
    return value;
}
