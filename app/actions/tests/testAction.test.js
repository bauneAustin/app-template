import TestAction from '../testAction';

describe('TestAction', () => {
    describe('sampleAction', () => {
        it('should return expected object', () => {
            expect(TestAction.sampleAction('test text')).toEqual({
                text: "test text",
                type: "SAMPLE_ACTION"
            });
        });
    });
});
