import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { IPageRepository } from '../repositories/IPageRepository';
import { TypeButon } from '../entities/TypeButon';
import { IResponsePageDTO } from '../dtos/IResponsePageDTO';
import { ITypeTextRepository } from '../repositories/ITypeTextRepository';
import { ICreateTypeTextDTO } from '../dtos/ICreateTypeTextDTO';
import { ITypeButonRepository } from '../repositories/ITypeButonRepository';

@injectable()
class TypeButonService {
  constructor(
    @inject('TypeButonRepository')
    private typeButonRepository: ITypeButonRepository,
  ) {}

  async create(typeButonDTO: ICreateTypeTextDTO): Promise<TypeButon> {
    const typeButon = new TypeButon();

    typeButon.name = typeButonDTO.name;

    return this.typeButonRepository.save(typeButon);
  }

  async list(): Promise<TypeButon[]> {
    return this.typeButonRepository.list();
  }

  async show(id: string): Promise<TypeButon> {
    return this.typeButonRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.typeButonRepository.updateSituation(id, situation);
  }

  async updateName(id: string, name: string): Promise<void> {
    await this.typeButonRepository.updateName(id, name);
  }
}

export { TypeButonService };
