import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'user123',
    description: 'Username for registration',
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'password123',
    description: 'Password for registration',
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user',
  })
  @IsString()
  fullName: string;

  @ApiProperty({
    example: 'admin',
    description: 'Role of the user',
  })
  @IsString()
  role: string;
}
