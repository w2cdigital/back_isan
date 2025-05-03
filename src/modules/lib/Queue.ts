// import Queue from 'bull';
// import dotenv from 'dotenv';
// dotenv.config();

// import * as jobs from '../jobs/index';

// const host = process.env.REDIS_HOST;
// const port = process.env.REDIS_PORT;
// const password = process.env.REDIS_PASSWORD;

// const redisConfig = {
//   redis: {
//     port: Number(port),
//     host: host,
//     password: password,
//     maxRetriesPerRequest: null as number | null,
//     enableReadyCheck: false,
//   },
//   limiter: {
//     max: 10000,
//     duration: 500,
//     bounceBack: true,
//   },
// };

// const queues = Object.values(jobs).map((job) => ({
//   bull: new Queue(job.key, redisConfig),
//   name: job.key,
//   handle: job.handle,
// }));

// export default {
//   queues,
//   add(name: any, data: any) {
//     const queue = this.queues.find((queue) => queue.name === name);

//     return queue?.bull.add(data, {
//       removeOnComplete: true,
//       removeOnFail: true,
//     });
//   },
//   process() {
//     return this.queues.forEach((queue) => {
//       queue.bull.process(queue.handle);

//       queue.bull.on('failed', (job, err) => {
//         console.log('Job failed', job.name, job.data);
//         console.log(err);
//       });
//     });
//   },
// };
