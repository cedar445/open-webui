import { writable } from 'svelte/store';
export const ifShowHistory = writable(false);
export const history1 = writable("string");
export const history2 = writable("string");
export const history3 = writable("string");
export const history4 = writable("string");
export const history5 = writable("string");
export const resHistory = writable("0");
export const ifCliHistory = writable(false)
export const keyContent = writable("")