import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: ""
});

export const mp3File = async (req: any, res: any) => {
    try {

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const fileBuffer = req.file.buffer;

        const transcription = await openai.audio.transcriptions.create({
            file: fileBuffer,
            model: 'whisper-1',
        });

        res.json({ transcription: transcription.text });
    } catch (error:any) {
        console.error('Error during transcription:', error);

        if (error.code === 'ECONNRESET') {
            res.status(500).json({ error: 'Connection was reset. Please try again.' });
        } else {
            res.status(500).json({ error: 'Failed to transcribe audio' });
        }
    }
};
