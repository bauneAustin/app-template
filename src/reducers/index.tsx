import { TestAction } from '../actions';
import { StoreState } from '../types/index';
import { CHANGE_TEST } from '../constants/index';

export function testChange(state: StoreState, action: TestAction): StoreState {
	switch (action.type) {
		case CHANGE_TEST:
			return { ...state, test: action.test};
	}
	return state;
}
