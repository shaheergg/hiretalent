/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9wuj3ld04uxrwej")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "arjd7ucr",
    "name": "available",
    "type": "bool",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9wuj3ld04uxrwej")

  // remove
  collection.schema.removeField("arjd7ucr")

  return dao.saveCollection(collection)
})
