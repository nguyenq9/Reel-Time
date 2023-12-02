import EntrySchema from "./EntrySchema";

const UserSchema = {
  name: 'User',
  properties: {
    _id: 'int',
    userName: 'string',
    password: 'string',
    entries: 'Entry[]',
  },
  primaryKey: '_id',
};


export default UserSchema;
