import { diskStorage } from 'multer';
import path from 'path';
import crypto from 'crypto';

import AppError from 'utils/errors/AppError';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

const uploadConfig = {
  tmpFolder,
  storage: diskStorage({
    destination: tmpFolder,
    filename(
      request,
      file,
      callback: (error: AppError | null, filename: string) => void,
    ) {
      const fileTypes = /jpeg|jpg|png/;

      const mimeType = fileTypes.test(file.mimetype);

      const extensionFilename = fileTypes.test(
        path.extname(file.originalname).toLowerCase(),
      );

      if (!mimeType && !extensionFilename) {
        return callback(
          new AppError('Somente arquivos de imagens (jpeg-jpg-png) válidos.'),
          file.filename,
        );
      }

      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};

export default uploadConfig;
