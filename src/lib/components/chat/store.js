import { writable } from 'svelte/store';
export const ifShowHistory = writable(false);
export const history1 = writable("string");
export const resHistory = writable("0");
export const ifCliHistory = writable(false)