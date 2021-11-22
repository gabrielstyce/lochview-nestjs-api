/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdModel, PromiseDataResponse } from '../../shared/models/common-service.types';
import { PrismaService } from '../prisma/prisma.service';

export abstract class CommonDataService<IdTypeDataModel, DataModel, CreateDataModel, UpdateDataModel> {
  protected abstract get dataService();

  constructor(private readonly _prisma: PrismaService) {
    this._prisma.$connect;
  }

  async create(dto: CreateDataModel, ...args): PromiseDataResponse<IdModel<IdTypeDataModel>> {
    return await this.dataService.create({
      data: { ...dto }
    });
  }

  async createBath(models: CreateDataModel[]): Promise<Array<IdModel<IdTypeDataModel>>> {
    const ids: Array<IdModel<IdTypeDataModel>> = [];

    for (const data of models) {
      const createdImg = await this.dataService.create({ data: data });

      ids.push({
        id: createdImg.id
      });
    }

    return ids;
  }

  async update(modelId: IdTypeDataModel, dto: UpdateDataModel): PromiseDataResponse<IdModel<IdTypeDataModel>> {
    return await this.dataService.update({
      where: { id: modelId },
      data: { ...dto }
    });
  }

  async findById(modelId: IdTypeDataModel): PromiseDataResponse<DataModel> {
    return await this.dataService.findFirst({
      where: { id: modelId }
    });
  }

  async listAll(): PromiseDataResponse<DataModel[]> {
    return await this.dataService.findMany();
  }
}
