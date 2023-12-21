import { atom } from "recoil";

export const userState = atom({
    key:"userState", //一意のkey
    default:{ isAdmin: false }
});