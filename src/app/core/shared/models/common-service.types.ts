export type IdModel<T> = { id: T };
export type PromiseDataResponse<T> = Promise<T | null>;

export interface ICommonService<IdTypeDataModel, DataModel, CreateDataModel, UpdateDataModel> {
  listAll(): PromiseDataResponse<DataModel[]>;
  create(dto: CreateDataModel, ...args): PromiseDataResponse<IdModel<IdTypeDataModel>>;
  update(modelId: IdTypeDataModel, dto: UpdateDataModel): PromiseDataResponse<IdModel<IdTypeDataModel>>;
  findById(modelId: IdTypeDataModel): PromiseDataResponse<DataModel>;
  delete(modelId: IdTypeDataModel): PromiseDataResponse<DataModel>;
  activate(modelId: IdTypeDataModel): PromiseDataResponse<DataModel>;
  deactivate(modelId: IdTypeDataModel): PromiseDataResponse<DataModel>;
}
