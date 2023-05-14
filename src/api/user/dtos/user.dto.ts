import { UserEntity } from '../entities/user.entity';

export class UserDto {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static fromEntity(user: UserEntity): UserDto {
    return new UserDto(user.id, user.name, user.email);
  }
}
