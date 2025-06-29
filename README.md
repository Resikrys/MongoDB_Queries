# MongoDB_Queries

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📄 Description

This project focuses on learning how to query a NoSQL database using MongoDB. We have a collection of Restaurant objects in New York City, and we need to perform various queries to extract specific information.

The main objective is to master MongoDB query operations including:
- Basic document retrieval
- Field projection and exclusion
- Filtering with conditions
- Sorting and limiting results
- Regular expression matching
- Geospatial queries
- Array operations
- Aggregation operations

### 🎯 Learning Objectives

- Learn to query a NoSQL database
- Master MongoDB query syntax
- Understand document-based data structures
- Practice filtering, sorting, and projection operations

## 💻 Technologies Used

- **MongoDB** - Document-oriented NoSQL database.
- **Docker** - Used for the containerization of the MongoDB service, facilitating its deployment and management.
- **MongoDB Compass** - Official graphical tool to interact and visualize data in MongoDB.
- **JavaScript** - Language used to write queries in the MongoDB shell.

## ▶️ How to Run Scripts

1. **Starting MongoDB with Docker:**
   ```bash
   docker run -d --name my-mongo -p 27017:27017 mongo
   ```

2. **Import Data:**
   ```bash
   docker cp restaurants.json my-mongo:/restaurants.json
   docker exec my-mongo mongoimport --db restaurants_db --collection restaurants --file /restaurants.json --jsonArray
   ```

3. **Execute Queries:**

***A) Using MongoDB Compass (Recommended for viewing)***
- Open MongoDB Compass.
- Click on "New Connection" or the + button.
- Use the default connection URI if you are connected locally: mongodb://localhost:27017/. Click "Connect".
- Once connected, select the restaurants_db database and then the restaurants collection.
- In the "Documents" tab, you can paste each query from the restaurant_queries.js file into the "Filter" (for filters), "Project" (for projections), "Sort", "Skip" or "Limit" bar as appropriate. For more complex queries (such as $mod or $map), use the "Aggregations" tab and build the pipeline step by step.

***B) Using the MongoDB Shell (command line)***
- Open a new terminal.
- Access the MongoDB shell inside your Docker container:
     ```bash
   # docker exec -it my-mongo mongosh
   ```
-  Once in the shell, select the database:
     ```bash
   use restaurants_db
   ```
-  Now you can paste the queries directly from restaurant_queries.js one by one, or execute the complete script:
  ```bash
   load("restaurant_queries.js")
   ```

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/docs/)
- [MongoDB Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
- [MongoDB Aggregation Pipeline](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/)
- [MongoDB Compass Guide](https://docs.mongodb.com/compass/)
