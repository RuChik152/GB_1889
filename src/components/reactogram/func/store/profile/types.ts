import { CHANGE_LAST_NAME, CHANGE_NAME, TOGGLE_PROFILE} from "./actions";

export type ProfileActions = ToggleProfile | ChangeName | changeLastName;

export interface ToggleProfile {
    type: typeof TOGGLE_PROFILE;
}

export interface ChangeName {
    type: typeof CHANGE_NAME;
    name: string;
}

export interface changeLastName {
    type: typeof CHANGE_LAST_NAME;
    name: string;
}