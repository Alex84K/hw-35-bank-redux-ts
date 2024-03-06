import { Sum } from "../utils/type.de";

export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';

export const deposit = (sum: Sum) => ({
    type: DEPOSIT,
    payload: sum
})

export const withdraw = (sum: Sum) => ({
    type: WITHDRAW,
    payload: sum
})