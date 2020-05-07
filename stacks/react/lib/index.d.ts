import auth from './auth';
import * as common from './common';
declare const reducers: (appReducers: any) => import("redux").Reducer<import("redux").CombinedState<{
    [x: string]: unknown;
}>, never>;
export { auth, common };
export default reducers;
