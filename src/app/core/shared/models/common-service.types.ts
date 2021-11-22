export type IdModel<T> = { id: T };
export type PromiseDataResponse<T> = Promise<T | null>;

export interface ICommonService<IdTypeDataModel, DataModel, CreateDataModel, UpdateDataModel> {
  create(dto: CreateDataModel, ...args): PromiseDataResponse<IdModel<IdTypeDataModel>>;
  update(id: IdTypeDataModel, dto: UpdateDataModel): PromiseDataResponse<IdModel<IdTypeDataModel>>;
  findById(id: IdTypeDataModel): PromiseDataResponse<DataModel>;
  listAll(): PromiseDataResponse<DataModel[]>;
}
