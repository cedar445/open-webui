import { writable } from 'svelte/store';
export const ifShowHistory = writable(false);
export const history1 = writable("string1");
export const history2 = writable("string2");
export const history3 = writable("string3");
export const history4 = writable("string4");
export const history5 = writable("string5");
export const showButton1 = writable(false);
export const showButton2 = writable(false);
export const showButton3 = writable(false);
export const showButton4 = writable(false);
export const showButton5 = writable(false);
export const resHistory = writable("0");
export const ifCliHistory = writable(false)
export const keyContent = writable("")
export const userId = writable("0")