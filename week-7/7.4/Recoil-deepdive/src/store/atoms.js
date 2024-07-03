import { atom, selector } from "recoil";


export const MyNetwork = atom({
    key : "MyNetwork",
    default : 102
});

export const Jobs = atom({
    key : "Jobs",
    default : 12
});

export const Messages = atom({
    key : "Messages",
    default : 0
});

export const Notifications = atom({
    key : "Notifications",
    default : 3
});

export const TotalCatchUps = selector({
    key : "totalCatchUps",
    get : (props) => {
        const network = props.get(MyNetwork);
        const jobs = props.get(Jobs);
        const messages = props.get(Messages);
        const notifications = props.get(Notifications);
        return network + jobs + messages + notifications;
    }
})