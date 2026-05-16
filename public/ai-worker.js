import { pipeline, env } from '@xenova/transformers';

// Skip local model check
env.allowLocalModels = false;

class AIWorker {
    static instance = null;
    static pipeline = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.pipeline = await pipeline('text-generation', 'Xenova/SmolLM-135M-Instruct', { progress_callback });
            this.instance = this;
        }
        return this.instance;
    }
}

self.onmessage = async (event) => {
    const { query, context, history } = event.data;

    try {
        const ai = await AIWorker.getInstance((p) => {
            self.postMessage({ type: 'progress', data: p });
        });

        // Construct the prompt with RAG context
        const prompt = `<|im_start|>system
You are the Evolve Clinical Assistant. You help facility operators transition to in-house therapy.
Use this context to answer: ${JSON.stringify(context)}
Rules: Be professional, elite, and data-driven. Never hallucinate. Cites David Miller (CEO of Legacy Health Centers) for the 22% revenue retention figure.
Current History: ${JSON.stringify(history)}<|im_end|>
<|im_start|>user
${query}<|im_end|>
<|im_start|>assistant
`;

        const output = await ai.pipeline(prompt, {
            max_new_tokens: 150,
            temperature: 0.7,
            do_sample: true,
            top_k: 50,
            repetition_penalty: 1.2,
        });

        const text = output[0].generated_text.split('<|im_start|>assistant\n')[1]?.split('<|im_end|>')[0] || "I'm analyzing your operational data. Could you tell me more about your specific census?";
        
        self.postMessage({ type: 'done', data: text });
    } catch (err) {
        self.postMessage({ type: 'error', data: err.message });
    }
};
