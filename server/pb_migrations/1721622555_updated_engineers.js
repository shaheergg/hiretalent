/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9wuj3ld04uxrwej")

  // remove
  collection.schema.removeField("et1v56n7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kb2ferp9",
    "name": "hourly_rate",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9wuj3ld04uxrwej")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "et1v56n7",
    "name": "hourly_rate",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("kb2ferp9")

  return dao.saveCollection(collection)
})
