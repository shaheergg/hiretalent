/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "flpjp2xre3ocgiz",
    "created": "2024-07-22 04:24:56.538Z",
    "updated": "2024-07-22 04:24:56.538Z",
    "name": "hires",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "s4bzr0vk",
        "name": "hired_at",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "sjwj3tuz",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "active",
            "terminated"
          ]
        }
      },
      {
        "system": false,
        "id": "xrs2nn7k",
        "name": "engineer",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "9wuj3ld04uxrwej",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "wzpcp71g",
        "name": "agency",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ttbw5l2isroyiru",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("flpjp2xre3ocgiz");

  return dao.deleteCollection(collection);
})
