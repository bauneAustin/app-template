import update from 'immutability-helper';
import Utils from '../Utils';

const initialState = {
    testTextState: ''
};

module.exports = Utils.createReducer(initialState, {
    SAMPLE_ACTION(state, action) {
        return update(state, {
            testTextState: {$set: action.text}
        });
    },
});
