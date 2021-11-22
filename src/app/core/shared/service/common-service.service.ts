/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonDataService } from '../data/common-data.service';
import { ICommonService, IdModel, PromiseDataResponse } from '../models/common-service.types';

export abstract class CommonService<
  IdTypeDataModel,
  DataModel,
  CreateServiceDataModel,
  UpdateServiceDataModel,
  CreateDataModel,
  UpdateDataModel
> implements ICommonService<IdTypeDataModel, DataModel, CreateServiceDataModel, UpdateServiceDataModel>
{
  constructor(private readonly _dtS: CommonDataService<IdTypeDataModel, DataModel, CreateDataModel, UpdateDataModel>) {}

  protected async parseCreateModel(data: CreateServiceDataModel, ...args): Promise<CreateDataModel> {
    return data as any;
  }

  protected async parseCreateManyModel(data: Array<CreateServiceDataModel>, ...args): Promise<Array<CreateDataModel>> {
    return data as any;
  }

  protected async parseUpdateModel(data: UpdateServiceDataModel, ...args): Promise<UpdateDataModel> {
    return data as any;
  }

  async create(dto: CreateServiceDataModel, ...args): PromiseDataResponse<IdModel<IdTypeDataModel>> {
    const data = await this.parseCreateModel(dto, args);
    return await this._dtS.create(data);
  }

  async createMany(dto: Array<CreateServiceDataModel>, ...args): PromiseDataResponse<Array<IdModel<IdTypeDataModel>>> {
    const data = await this.parseCreateManyModel(dto, args);
    return await this._dtS.createBath(data);
  }

  async update(modelId: IdTypeDataModel, dto: UpdateServiceDataModel, ...args): PromiseDataResponse<IdModel<IdTypeDataModel>> {
    const data = await this.parseUpdateModel(dto, args);
    return await this._dtS.update(modelId, data);
  }

  async findById(modelId: IdTypeDataModel): PromiseDataResponse<DataModel> {
    return await this._dtS.findById(modelId);
  }

  async listAll(): PromiseDataResponse<DataModel[]> {
    return await this._dtS.listAll();
  }
}
