class SampleProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
    }

    process(inputs, outputs) {
        console.log( "processing" )
        const input  = inputs[0];
        const output = outputs[0];

        for (let channel = 0, numberOfChannels = output.length; channel < numberOfChannels; channel++) {
            output[channel].set(input[channel]);
        }

        return true;
    }
}

registerProcessor('sample-processor', SampleProcessor);
