import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import validateUuid from '../../../shared/helpers/ValidateUuid';
import { IButonRepository } from '../repositories/IButonRepository';
import { ICreateButonDTO } from '../dtos/ICreateButonDTO';
import { Buton } from '../entities/Buton';

@injectable()
class ButonService {
  constructor(
    @inject('ButonRepository')
    private butonRepository: IButonRepository,
  ) {}

  async create(butonDTO: ICreateButonDTO): Promise<Buton> {
    const buton = new Buton();

    buton.description = butonDTO.description;
    buton.companyPageId = butonDTO.companyPageId;
    buton.typeButonId = butonDTO.typeButonId;

    return this.butonRepository.save(buton);
  }

  async list(companyPageId: string): Promise<Buton[]> {
    return this.butonRepository.list(companyPageId);
  }

  async show(id: string): Promise<Buton> {
    return this.butonRepository.findById(id);
  }

  async updateSituation(id: string, situation: boolean): Promise<void> {
    await this.butonRepository.updateSituation(id, situation);
  }

  async updateDescription(id: string, description: string): Promise<void> {
    await this.butonRepository.updateDescription(id, description);
  }
}

export { ButonService };
