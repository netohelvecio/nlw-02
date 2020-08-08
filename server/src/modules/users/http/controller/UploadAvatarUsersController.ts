import { container } from 'tsyringe';
import { Request, Response } from 'express';

import UploadAvatarUserService from 'modules/users/services/UploadAvatarUserService';

class UploadAvatarUsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { filename } = request.file;
    const { user_id } = request.body;

    const uploadAvatarUsers = container.resolve(UploadAvatarUserService);

    const user = await uploadAvatarUsers.execute({ user_id, filename });

    return response.json(user);
  }
}

export default UploadAvatarUsersController;
