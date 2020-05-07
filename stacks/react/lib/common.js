"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncReducer = function (name) {
    return function (state, action) {
        var _a, _b;
        if (state === void 0) { state = {}; }
        if (!action || Object.keys(action).length === 0 || !action.type) {
            // We don't tolerate empty actions
            return state;
        }
        // Let's see what kind of action this is
        var _c = action.type.split('/'), source = _c[0], actionState = _c[1], chunkName = _c[2], actionName = _c[3];
        if (source.toLowerCase() != '@@carmel') {
            // We only recognize framework actions
            return state;
        }
        if (!chunkName || (name.toLowerCase() != chunkName.toLowerCase())) {
            // We want to ignore foreign actions
            return state;
        }
        // Figure out the flavor
        var flavor = (!action.flavor ? ['main'] : (action.flavor.split('/') || ['main']));
        var newErrorFlavor = (flavor.length > 1 ? (_a = {}, _a[flavor[1]] = action.error, _a) : action.error);
        var newDataFlavor = (flavor.length > 1 ? (_b = {}, _b[flavor[1]] = action.data, _b) : action.data);
        // The action timestamp
        var timestamp = action.timestamp;
        // The data provider
        var provider = action.provider;
        // Let's work on the new state
        var newState = { flavor: action.flavor, timestamp: timestamp, provider: provider, inProgress: false, done: true, action: actionName };
        var data = Object.assign({}, state.data);
        var error = Object.assign({}, state.error);
        switch (actionState.toLowerCase()) {
            case 'start':
                return Object.assign({}, newState, { inProgress: true, done: false, data: data, error: error });
            case 'error':
                if (newErrorFlavor) {
                    error[flavor[0]] = newErrorFlavor;
                }
                return Object.assign({}, newState, Object.keys(error).length > 0 ? { error: error } : {});
            case 'ok':
                if (newDataFlavor) {
                    data[flavor[0]] = newDataFlavor;
                }
                return Object.assign({}, newState, Object.keys(data).length > 0 ? { data: data } : {});
            default:
        }
        return state;
    };
};
