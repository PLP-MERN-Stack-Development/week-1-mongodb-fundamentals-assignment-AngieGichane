// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } })

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" })

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 15.99 } }
)

// 5. Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })

// 6. Find books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// 7. Projection - return only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
)

// 8. Sort books by price ascending
db.books.find().sort({ price: 1 })

// 9. Sort books by price descending
db.books.find().sort({ price: -1 })

// 10. Pagination: Limit 5 books, skip first 5 (Page 2)
db.books.find().skip(5).limit(5)

// 11. Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// 12. Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// 13. Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  }
])

// 14. Create an index on title
db.books.createIndex({ title: 1 })

// 15. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// 16. Use explain() to show performance
db.books.find({ title: "1984" }).explain("executionStats")
