import { atom } from "recoil";


export const MyNetwork = atom({
    key : "MyNetwork",
    default : 100
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
