import { atom, selector } from "recoil";


export const networkData = atom({
    key : "networkData",
    default : {}
})

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