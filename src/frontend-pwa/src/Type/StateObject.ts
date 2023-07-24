type StateObject = {
    appData: object;
    currentLocation: object;
    eulaAccepted: boolean;
    eulaState: boolean;
    isLoading: boolean;
    isOnline: boolean;
    reports: object;
    settings: {
        location_range: number;
        offline_mode: boolean;
        analytic_opt_in: boolean;
        lang: string;
    };
    toolTipText: string;
};

export default StateObject;
