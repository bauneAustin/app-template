const SAMPLE_ACTION = 'SAMPLE_ACTION';

module.exports = {
    sampleAction: (text) => {
        return {
            type: SAMPLE_ACTION,
            text
        };
    },

};