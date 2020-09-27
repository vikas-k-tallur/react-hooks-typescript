export type LoggedinUserType = {
    id: number;
    name: string;
};

export type InitialStateType = {
    isAuthenticated: boolean;
    toggleSpinner: boolean | false;
    error: string | null;
    user: LoggedinUserType | null;
};