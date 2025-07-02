# PLP Bookstore MongoDB Assignment

This repository contains MongoDB queries and scripts for managing a bookstore database as part of the PLP (Power Learn Project) MongoDB assignment.

## 📋 Assignment Overview

This project demonstrates proficiency in MongoDB operations including:
- Basic CRUD operations
- Advanced querying with filtering, projection, and sorting
- Aggregation pipelines for data analysis
- Database indexing for performance optimization

## 🗄️ Database Structure

- **Database Name:** `plp_bookstore`
- **Collection Name:** `books`
- **Document Structure:**
  ```javascript
  {
    title: String,
    author: String,
    genre: String,
    published_year: Number,
    price: Number,
    in_stock: Boolean,
    pages: Number,
    publisher: String
  }
  ```

## 📁 Files Description

- `insert_books.js` - Node.js script to populate the database with 12 sample books
- `queries.js` - Complete set of MongoDB queries demonstrating all assignment requirements
- `README.md` - This documentation file
- `screenshots/` - Screenshots showing MongoDB Compass interface and query results

## 🚀 Setup Instructions

### Prerequisites
- MongoDB installed and running locally
- Node.js installed for running the insert script
- MongoDB Compass (optional, for GUI interface)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone [your-repository-url]
   cd [your-repository-name]
   ```

2. **Start MongoDB service:**
   ```bash
   # Windows
   net start MongoDB
   
   # macOS (if installed via Homebrew)
   brew services start mongodb/brew/mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

3. **Populate the database:**
   ```bash
   node insert_books.js
   ```

4. **Verify installation:**
   ```bash
   mongosh mongodb://localhost:27017
   ```
   ```javascript
   use plp_bookstore
   db.books.find().count()  // Should return 12
   ```

## 🔧 Running the Queries

### Method 1: Using MongoDB Shell (mongosh)
```bash
# Connect to MongoDB
mongosh mongodb://localhost:27017

# Switch to the database
use plp_bookstore

# Load and run all queries
load('queries.js')
```

### Method 2: Using MongoDB Compass
1. Connect to `mongodb://localhost:27017`
2. Navigate to `plp_bookstore` > `books`
3. Use the query bar to run individual queries
4. Use the Aggregations tab for pipeline operations

## 📊 Query Categories

### CRUD Operations
- Find books by genre, author, or publication year
- Update book prices
- Delete books by title

### Advanced Queries
- Complex filtering with `$and` operator
- Field projection for specific data
- Sorting (ascending/descending)
- Pagination with `limit()` and `skip()`

### Aggregation Pipelines
- Calculate average price by genre
- Find authors with most books
- Group books by publication decade

### Indexing
- Single field index on `title`
- Compound index on `author` and `published_year`
- Performance analysis using `explain()`

## 📈 Sample Data

The database contains 12 classic books including:
- To Kill a Mockingbird (Harper Lee)
- 1984 (George Orwell)
- The Great Gatsby (F. Scott Fitzgerald)
- The Hobbit (J.R.R. Tolkien)
- And 8 more classics

## 🎯 Assignment Tasks Completed

- ✅ **Task 1:** MongoDB setup with database and collection creation
- ✅ **Task 2:** Basic CRUD operations (Create, Read, Update, Delete)
- ✅ **Task 3:** Advanced queries with filtering, projection, and pagination
- ✅ **Task 4:** Aggregation pipelines for data analysis
- ✅ **Task 5:** Database indexing with performance optimization

## 📝 Notes

- Publication years in the sample dataset range from 1813 to 1988
- Some queries were adjusted to match the available data (e.g., using 1950 instead of 2000 as cutoff year)
- All operations tested and verified using both MongoDB Shell and MongoDB Compass

## 🔍 Query Examples

### Find Fiction Books
```javascript
db.books.find({ genre: "Fiction" })
```

### Average Price by Genre
```javascript
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } },
  { $sort: { averagePrice: -1 } }
])
```

### Create Index
```javascript
db.books.createIndex({ title: 1 })
```

## 🤝 Contributing

This is an educational project for the Power Learn Project MongoDB course. The queries demonstrate fundamental and advanced MongoDB operations as per the assignment requirements.

## 📧 Contact

For questions about this assignment, please refer to the PLP course materials or contact your instructor.

---
**Assignment completed as part of Power Learn Project (PLP) MongoDB Course**
