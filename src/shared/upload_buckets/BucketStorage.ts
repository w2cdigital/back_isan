import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import mime from 'mime-types';
import { resolve } from 'path';
import { uploadConfig } from '../../config/upload';
import fs from 'fs';

interface IBucketStorage {
  save(filename: string, destinationFolder: string): Promise<void>;
}

class BucketStorage implements IBucketStorage {
  private s3Client;
  constructor() {
    this.s3Client = new S3Client({
      region: 'auto',
      endpoint: process.env.BUCKET_URL,
      credentials: {
        accessKeyId: process.env.BUCKET_KEY_ID,
        secretAccessKey: process.env.BUCKET_KEY_ACCESS,
      },
    });
  }

  async save(filename: string, destinationFolder: string): Promise<void> {
    const fileForUpload = resolve(uploadConfig.TMP_FOLDER, filename);
    const fileBuffer = await fs.readFileSync(fileForUpload);

    const contentType =
      mime.lookup(fileForUpload) || 'application/octet-stream';

    try {
      const uploadParams = {
        Bucket: 'w2c',
        Key: `${destinationFolder}/${filename}`,
        Body: fileBuffer,
        ContentType: contentType,
      };

      const command = new PutObjectCommand(uploadParams);
      const response = await this.s3Client.send(command);
      await fs.promises.unlink(fileForUpload);
      console.log('Upload completed: ', response);
    } catch (err) {
      console.error('Error upload: ', err);
    }
  }
}

export { IBucketStorage, BucketStorage };
