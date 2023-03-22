import { S3Client, AbortMultipartUploadCommand } from "@aws-sdk/client-s3";

import {PrismaClient} from "@prisma/client";


const client = new S3Client({ region: "REGION", credentials:
    //@ts-ignore
        {accessKeyId: process.env.S3_ACCESS_KEY,
            //@ts-ignore
            secretAccessKey: process.env.S3_SECRET_KEY} });

export default client
