import * as constants from '../constants';

export interface ChangeTest {
	type: constants.CHANGE_TEST;
	test: string;
}

export type TestAction = ChangeTest;

export function changeTest(test: string): ChangeTest {
	return {
		type: constants.CHANGE_TEST,
		test
	}
}

