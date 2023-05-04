import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @Length(4, 32)
  name: string;

  @IsNotEmpty()
  cel: string;
}
