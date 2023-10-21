import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  appInfo() {
    return { name: 'Test App' };
  }
}
