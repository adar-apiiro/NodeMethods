import AWS from 'aws-sdk';

AWS.config.region = process.env.AWS_REGION;
const ssmClient = new AWS.SSM();

export { ssmClient };
