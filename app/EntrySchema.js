const EntrySchema = {
    name: 'Entry',
    embedded: true,
    properties: {
      _id: 'int',
      date: 'string',
      species: 'string',
      quantity: 'int',
      areaCode: 'int',
    },
  };

  
  export default EntrySchema;