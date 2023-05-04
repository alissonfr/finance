export abstract class UserRespository {
  abstract create(name: string, cel: string): Promise<void>;
}
