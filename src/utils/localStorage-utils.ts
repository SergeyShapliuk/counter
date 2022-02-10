import {AppRootStateType} from "../state/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter-state', serializedState);
    } catch {
        // ignore write errors
    }
}
