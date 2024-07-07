import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // Tidak perlu menggunakan sesi, cukup lanjutkan ke logika berikutnya
}
