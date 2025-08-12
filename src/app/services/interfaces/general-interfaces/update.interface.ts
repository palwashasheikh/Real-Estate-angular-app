export interface UpdateModel {
  message: string;
  data: Update;
}

export interface Update {
  acknowledged: Boolean;
  modifiedCount: Number;
  upsertedId: any;
  upsertedCount: Number;
  matchedCount: Number;
}
