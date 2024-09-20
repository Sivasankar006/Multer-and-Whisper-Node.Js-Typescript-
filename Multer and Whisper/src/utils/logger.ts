import pino from 'pino';
import dayjs from 'dayjs';
import pretty from 'pino-pretty';

const prettyStream = pretty({
    colorize: true,  
    translateTime: 'yyyy-mm-dd HH:MM:ss',  
});

const logger = pino(
    {
        base: {
            pid: false,
        },
        timestamp: () => `,"time":"${dayjs().format()}"`,
    },
    prettyStream
);

export default logger;
