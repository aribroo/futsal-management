import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'user123',
    description: 'Username for login',
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'password123',
    description: 'Password for login',
  })
  @IsString()
  password: string;
}
