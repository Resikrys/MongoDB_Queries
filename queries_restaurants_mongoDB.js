// 1. Write a query to display all documents in the Restaurants collection.
db.restaurants.find({});

// 2. Write a query to display the restaurant_id, name, borough, and cuisine for all documents in the Restaurants collection.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 1 });

// 3. Write a query to display the restaurant_id, name, borough, and cuisine, but exclude the _id field, for all documents in the Restaurants collection.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });

// 4. Write a query to display the restaurant_id, name, borough, and zip code, but exclude the _id field, for all documents in the Restaurants collection.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0 });

// 5. Write a query to display all restaurants that are in the Bronx.

db.restaurants.find({ borough: "Bronx" });

// 6. Write a query to display the first 5 restaurants that are in the Bronx.
db.restaurants.find({ borough: "Bronx" }).limit(5);

// 7. Write a query to display the next 5 restaurants after skipping the first 5 in the Bronx.
db.restaurants.find({ borough: "Bronx" }).skip(5).limit(5);

// 8. Write a query to find restaurants that have a score greater than 90.
db.restaurants.find({ "grades.score": { $gt: 90 } });

// 9. Write a query to find restaurants that have a score greater than 80 but less than 100.
db.restaurants.find({ "grades.score": { $gt: 90 } & { $lt: 100 } });

// 10. Write a query to find restaurants that are located at a latitude value less than -95.754168.
db.restaurants.find({ "adress.coord.0": { $lt: -95.754168 } });

// 11. Write a MongoDB query to find restaurants that do not serve any 'American' cuisine and have a score greater than 70 and a longitude less than -65.754168.
db.restaurants.find({
  $and: [
    { cuisine: { $ne: "American" } },
    { "grades.score": { $gt: 70 } },
    { "address.coord.0": { $lt: -65.754168 } }
  ]
});

// 12. Write a query to find restaurants that do not serve any 'American' cuisine and have a score greater than 70 and are located at a longitude less than -65.754168. Note: Do this query without using the $and operator.
db.restaurants.find({
  cuisine: { $ne: "American" },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 }
});

// 13. Write a query to find restaurants that do not serve any 'American' cuisine and have a score of 'A' that is not in Brooklyn. The document should be displayed by cuisine in descending order.
db.restaurants.find({
  cuisine: { $ne: "American" },
  "grades.grade": "A",
  borough: { $ne: "Brooklyn" }
}).sort({ cuisine: -1 });

// 14. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'Wil' as the first three letters in their name.
db.restaurants.find(
  { name: { $regex: "^Wil" } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 15. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'ces' as the last three letters in their name.
db.restaurants.find(
  { name: { $regex: "ces$" } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 16. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'Reg' as three letters anywhere in their name.
db.restaurants.find(
  { name: { $regex: "Reg" } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 17. Write a query to find the restaurants that belong to the Bronx and prepared any American or Chinese dish.
db.restaurants.find({
  borough: "Bronx",
  $or: [
    { cuisine: "American" },
    { cuisine: "Chinese" }
  ]
});

// 18. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that belong to Staten Island or Queens or Bronx or Brooklyn.
db.restaurants.find({
  $or: [
    { borough: "Staten Island" },
    { borough: "Queens" },
    { borough: "Bronx" },
    { borough: "Brooklyn" }
  ]
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );

db.restaurants.find(
  {
    borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] }
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 19. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that do not belong to Staten Island or Queens or Bronx or Brooklyn.
db.restaurants.find(
  {
    borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] }
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 20. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that achieve a score that is no more than 10.
db.restaurants.find({ "grades.score": { $lte: 10 } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });

// 21. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that prepare fish except 'American' and 'Chinese' or the restaurant name starts with the letters 'Wil'.
db.restaurants.find(
  {
    $or: [
      { cuisine: "Seafood" },
      { name: { $regex: "^Wil" } }
    ]
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

db.restaurants.find(
  {
    $or: [
      {
        $and: [
          { cuisine: "Seafood" },
          { cuisine: { $nin: ["American", "Chinese"] } }
        ]
      },
      {
        name: { $regex: "^Wil" }
      }
    ]
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 22. Write a query to find the restaurant_id, name, and grades for those restaurants that achieve a grade of "A" and a score of 11 on study data ISODate "2014-08-11T00:00:00Z".
db.restaurants.find(
  {
    "grades": {
      $elemMatch: {
        grade: "A",
        score: 11,
        date: ISODate("2014-08-11T00:00:00Z")
      }
    }
  },
  { restaurant_id: 1, name: 1, grades: 1, _id: 0 }
);

// 23. Write a query to find the restaurant_id, name, and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
db.restaurants.find(
  {
    "grades.1": {
      $elemMatch: {
        grade: "A",
        score: 9,
        date: ISODate("2014-08-11T00:00:00Z")
      }
    }
  },
  { restaurant_id: 1, name: 1, grades: 1, _id: 0 }
);

// 24. Write a query to find the restaurant_id, name, address, and geographic location for those restaurants where the second element of the array coord contains a value that is greater than 42 and up to 52.
db.restaurants.find(
  {
    "address.coord.1": { $gt: 42, $lte: 52 }
  },
  {
    restaurant_id: 1, name: 1, address: 1, borough: 1, _id: 0
  }
);

// 25. Write a query to sort the restaurant names in ascending order along with all columns.
db.restaurants.find({}).sort({ name: 1 });

// 26. Write a query to sort the restaurant names in descending order along with all columns.
db.restaurants.find({}).sort({ name: -1 });

// 27. Write a query to sort the cuisine names in ascending order and by the same cuisine neighborhood. Descending order.
db.restaurants.find({}).sort({ cuisine: 1 , borough: -1 });

// 28. Write a query to find all addresses that do not contain the street.
db.restaurants.find({ "address.street": { $exists: false } });

db.restaurants.find({ "address.street": { $in: [null] } });

// 29. Write a query that will select all documents in the restaurants collection where the value of the coord field is Double.
db.restaurants.find({ "address.coord.0": { $type: "double" } }); //Must check if specific element inside the array is double type

db.restaurants.find({
  "address.coord": { $type: "double" }
});

// 30. Write a query that will select the restaurant_id, name, and grade for those restaurants that return 0 as a remainder after dividing the score by 7.
db.restaurants.aggregate([ //punto de entrada para las pipelines de agregación
  {
    $match: { //primera etapa -> como el filtro de find(), pero dentro de una pipeline de agregación
      "grades.score": { $mod: [7, 0] } //condición del módulo
    }
  },
  {
    $project: { //segunda etapa -> como la proyección en find(). Se usa para remodelar los documentos de salida
      restaurant_id: 1,
      name: 1,
      grades: 1, // Si solo quieres 'grade', sería "grades.grade": 1, pero aquí se pide 'grade' que es parte de 'grades'
      _id: 0
    }
  }
]);

db.restaurants.aggregate([
  {
    $match: {
      "grades.score": { $mod: [7, 0] }
    }
  },
  {
    $project: {
      _id: 0,
      restaurant_id: 1,
      name: 1,
      grades: {
        $map: { //map -> sobreescribe el array original utilizando el resultado de la operación
          input: "$grades",
          as: "gradeElement",
          in: "$$gradeElement.grade"
        }
      }
    }
  }
]);

// 31. Write a query to find the restaurant name, borough, longitude, and altitude, and cuisine for those restaurants that contain 'mon' as three letters somewhere in their name.
db.restaurants.find(
  { name: { $regex: "mon" } },
  { name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 }
);

// 32. Write a query to find the restaurant name, borough, longitude and latitude, and cuisine for those restaurants that contain 'Mad' as the first three letters of their name.
db.restaurants.find(
  { name: { $regex: "^Mad" } },
  { name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 }
);