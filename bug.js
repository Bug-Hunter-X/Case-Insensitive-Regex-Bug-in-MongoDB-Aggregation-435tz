```javascript
const pipeline = [
  {
    $match: {
      field: { $regex: /pattern/i }
    }
  },
  {
    $group: {
      _id: "$field",
      count: { $sum: 1 }
    }
  }
];

Await db.collection('data').aggregate(pipeline);
```