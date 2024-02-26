# Question 1: Normalization
Consider the following unnormalized table for a bookstore database:

Book ID | Title                  | Author              | Genre   | Publisher      | ISBN           | Price
--------|------------------------|---------------------|---------|-----------------|-----------------|-------
101     | To Kill a Mockingbird  | Harper Lee          | Fiction | HarperCollins   | 978-0061120084  | 10.99
102     | The Great Gatsby       | F. Scott Fitzgerald | Fiction | Scribner        | 978-0743273565  | 12.50
103     | Principles of Physics  | Jearl Walker        | Science | Wiley           | 978-0321976444  | 50.00



Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.



# Answer:

1NF (First Normal Form):
In 1NF, each column must contain atomic (indivisible) values, and there should be no repeating groups or arrays.

No changes are needed for the original table; it is already in 1NF.

2NF (Second Normal Form):
In 2NF, the table must be in 1NF, and each non-prime attribute must be fully functionally dependent on the primary key.

Primary Key: Book ID

Functional Dependencies:

Book ID → Title, Author, Genre, Publisher, ISBN, Price
ISBN → Title, Author, Genre, Publisher
No partial dependencies exist.
The table is already in 2NF because each non-prime attribute is fully functionally dependent on the primary key.

3NF (Third Normal Form):
In 3NF, the table must be in 2NF, and no transitive dependencies should exist.

Functional Dependencies:

Book ID → Title, Author, Genre, Publisher, ISBN, Price
ISBN → Title, Author, Genre, Publisher
Eliminating Transitive Dependency:

Create a new table for Publisher information:

Publisher Table:

diff
Copy code
Publisher      | ISBN
---------------|-----------------
HarperCollins   | 978-0061120084
Scribner        | 978-0743273565
Wiley           | 978-0321976444
Now, the main table:

Main Table (3NF):

css
Copy code
Book ID | Title                  | Author              | Genre   | ISBN           | Price
--------|------------------------|---------------------|---------|-----------------|-------
101     | To Kill a Mockingbird  | Harper Lee          | Fiction | 978-0061120084  | 10.99
102     | The Great Gatsby       | F. Scott Fitzgerald | Fiction | 978-0743273565  | 12.50
103     | Principles of Physics  | Jearl Walker        | Science | 978-0321976444  | 50.00

Now, the table is in 3NF, as there are no transitive dependencies and all the data is logically organized.


# Question 2: Database Normalization Practice
Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF( if applicable)

Table: Employee Information

Employee ID | Employee Name | Department | Project ID | Project Name | Start Date  | End Date    | Salary
------------|---------------|------------|------------|--------------|-------------|-------------|-------
101         | John Doe      | HR         | 001        | Project A    | 2023-01-15  | 2023-06-30  | 5000
101         | John Doe      | HR         | 002        | Project B    | 2023-04-01  | 2023-08-31  | 5200
102         | Jane Smith    | Marketing  | 001        | Project A    | 2023-02-01  | 2023-05-31  | 5500
103         | Mike Johnson  | IT         | 002        | Project B    | 2023-03-10  | 2023-08-15  | 6000
103         | Mike Johnson  | IT         | 003        | Project C    | 2023-06-15  | 2023-11-30  | 6200
104         | Sarah Brown   | HR         | 002        | Project B    | 2023-04-20  | 2023-07-31  | 4800
105         | Robert Lee    | Finance    | 001        | Project A    | 2023-05-05  | 2023-09-30  | 5200
106         | Lisa Wang     | IT         | 001        | Project A    | 2023-06-01  | 2023-12-31  | 5800

# Answer:   

1NF (First Normal Form):
In 1NF, each column must contain atomic (indivisible) values, and there should be no repeating groups or arrays.

The table is already in 1NF as each cell has a single value.

2NF (Second Normal Form):
In 2NF, the table must be in 1NF, and each non-prime attribute must be fully functionally dependent on the primary key.

Primary Key: {Employee ID, Project ID}

Functional Dependencies:

{Employee ID, Project ID} → Employee Name, Department, Project Name, Start Date, End Date, Salary
The table is already in 2NF because each non-prime attribute is fully functionally dependent on the composite primary key.

3NF (Third Normal Form):
In 3NF, the table must be in 2NF, and no transitive dependencies should exist.

Functional Dependencies:

{Employee ID} → Employee Name, Department
{Project ID} → Project Name
{Employee ID, Project ID} → Start Date, End Date, Salary
Tables after 3NF:

Employee Table:

diff
Copy code
Employee ID | Employee Name | Department
------------|---------------|------------
101         | John Doe      | HR
102         | Jane Smith    | Marketing
103         | Mike Johnson  | IT
104         | Sarah Brown   | HR
105         | Robert Lee    | Finance
106         | Lisa Wang     | IT
Project Table:

css
Copy code
Project ID | Project Name
-----------|--------------
001        | Project A
002        | Project B
003        | Project C
Employee_Project Table:

yaml
Copy code
Employee ID | Project ID | Start Date  | End Date    | Salary
------------|------------|-------------|-------------|-------
101         | 001        | 2023-01-15  | 2023-06-30  | 5000
101         | 002        | 2023-04-01  | 2023-08-31  | 5200
102         | 001        | 2023-02-01  | 2023-05-31  | 5500
103         | 002        | 2023-03-10  | 2023-08-15  | 6000
103         | 003        | 2023-06-15  | 2023-11-30  | 6200
104         | 002        | 2023-04-20  | 2023-07-31  | 4800
105         | 001        | 2023-05-05  | 2023-09-30  | 5200
106         | 001        | 2023-06-01  | 2023-12-31  | 5800
4NF (Fourth Normal Form):
In 4NF, the table must be in 3NF, and multi-valued dependencies should be removed.

There are no multi-valued dependencies in this case, so the tables remain the same.

5NF (Fifth Normal Form):
In this case, it's not applicable to go beyond 4NF as there are no specific conditions requiring 5NF for this dataset.

The tables provided after 3NF should be sufficient for practical use.


# Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

# Answer:

In a relational database, primary keys and foreign keys are crucial components that help establish relationships between tables.

Primary Key:
Definition: A primary key is a column or a set of columns in a table that uniquely identifies each record in that table. It must have a unique value for each row and cannot contain null values.

Purpose:

Uniquely identifies each record in the table.
Ensures data integrity by preventing duplicate records.
Acts as a reference point for establishing relationships with other tables.
Foreign Key:
Definition: A foreign key is a column or a set of columns in a table that refers to the primary key of another table. It establishes a link between the data in two tables, representing a relationship.

Purpose:

Enables the creation of relationships between tables.
Ensures referential integrity by ensuring that values in the foreign key column match values in the referenced primary key column.
Allows the implementation of constraints to maintain consistency in the database.
Establishing Relationships:
One-to-One Relationship:

In a one-to-one relationship, a record in one table is related to only one record in another table, and vice versa.
Example: A table of employees and a table of employee addresses, where each employee has only one address.
One-to-Many Relationship:

In a one-to-many relationship, a record in one table can be related to multiple records in another table, but a record in the second table is related to only one record in the first table.
Example: A table of customers and a table of orders, where each customer can have multiple orders, but each order is associated with only one customer.
Many-to-Many Relationship:

In a many-to-many relationship, records in both tables can be related to multiple records in the other table.
To implement a many-to-many relationship, a junction (or associative) table is introduced, and the primary keys of the related tables become composite primary keys in the junction table.
Example: A table of students and a table of courses, where each student can enroll in multiple courses, and each course can have multiple students.
Example:
Consider two tables: Employees and Departments.

Employees Table:

yaml
Copy code
EmployeeID | EmployeeName | DepartmentID | Salary
-----------|--------------|--------------|-------
101        | John Doe      | 1            | 5000
102        | Jane Smith    | 2            | 5500
103        | Mike Johnson  | 1            | 6000
Departments Table:

diff
Copy code
DepartmentID | DepartmentName
-------------|----------------
1            | HR
2            | Marketing
In this example:

EmployeeID is the primary key in the Employees table.
DepartmentID is the primary key in the Departments table.
DepartmentID in the Employees table is a foreign key that establishes a relationship with the Departments table. This foreign key refers to the primary key DepartmentID in the Departments table.
This relationship allows you to link employees to their respective departments, facilitating queries that involve information from both tables.

# Question 4: Explain the ACID properties in the context of database transactions.

# Answer:
The ACID properties are a set of four essential characteristics that guarantee the reliability and consistency of database transactions. These properties ensure that database transactions are executed in a manner that preserves the integrity of the data. The term ACID stands for Atomicity, Consistency, Isolation, and Durability.

1. Atomicity:
Definition: Atomicity ensures that a transaction is treated as a single, indivisible unit of work. Either the entire transaction is successfully completed, or it is entirely rolled back to its initial state if any part of it fails.

Example:
Consider a funds transfer between two bank accounts. Atomicity ensures that if the debit from one account succeeds, the corresponding credit to the other account also succeeds. If any step fails, the entire transaction is rolled back.

2. Consistency:
Definition: Consistency ensures that a transaction brings the database from one valid state to another. The database should satisfy all integrity constraints before and after the transaction.

Example:
If a database has an integrity constraint that ensures a customer's age is always greater than 18, a transaction that attempts to set a customer's age to 16 would violate consistency. The database should remain consistent with all defined rules.

3. Isolation:
Definition: Isolation ensures that the execution of one transaction is isolated from the execution of other transactions. Each transaction should appear as if it is the only transaction being executed, even when multiple transactions are happening concurrently.

Example:
If two transactions are updating the same record simultaneously, isolation ensures that the changes made by one transaction are not visible to the other until the first transaction is committed. This prevents interference and maintains data integrity.

4. Durability:
Definition: Durability guarantees that once a transaction is committed, its effects will persist, and the changes made to the database will survive subsequent system failures.

Example:
After a successful funds transfer in a banking application, durability ensures that the record of the transaction is stored permanently, and even if the system crashes or restarts, the changes made during the transaction are not lost.

Importance:
Reliability: ACID properties are crucial for maintaining the reliability of a database system.

Data Integrity: They ensure that the database remains in a consistent and correct state, even in the presence of failures or concurrent transactions.

Transaction Management: ACID properties help in managing and controlling transactions, providing a robust framework for database systems.

While ACID properties provide a strong foundation for data integrity, it's worth noting that in some distributed and high-performance systems, there may be trade-offs, and alternative models such as BASE (Basically Available, Soft state, Eventually consistent) are considered. These alternatives may sacrifice strict consistency for improved availability and fault tolerance in certain scenarios.


# Question 5: Describe the concept of indexing in a database. How does indexing improve query performance?

# Answer:
Indexing in a Database:

In a database, an index is a data structure that provides a quick and efficient way to look up and access rows in a table based on the values in one or more columns. Indexing is similar to an index in a book, where you can quickly find a specific topic by looking at the index instead of scanning the entire book.

Key Points about Indexing:

Indexed Columns: Indexing is typically applied to columns that are frequently used in search conditions (e.g., WHERE clause in SQL queries).

Data Structure: An index is a separate data structure that stores a subset of the columns of a table in a sorted or hashed form, along with a pointer to the corresponding rows.

Performance Trade-off: While indexing speeds up query performance, it comes with a trade-off in terms of additional storage space and a slight overhead in the case of write operations (insert, update, delete), as the index needs to be maintained.

How Indexing Improves Query Performance:

Faster Data Retrieval:

When a query includes a condition on an indexed column, the database engine can use the index to quickly locate the rows that satisfy the condition, reducing the amount of data that needs to be scanned.
Avoiding Full Table Scans:

Without an index, a query might require a full table scan, where the database engine has to examine every row in the table. Indexing allows the engine to skip directly to the relevant subset of rows.
Sorting and Grouping:

Indexes can speed up sorting and grouping operations, as the data is already sorted or grouped in the index structure.
Enhanced Join Operations:

When joining tables, indexes on the join columns can significantly improve the performance of join operations by allowing the database engine to quickly locate matching rows.
Covering Index:

A covering index is an index that includes all the columns needed for a query, eliminating the need to access the actual table. This can further improve query performance.
Query Plan Optimization:

The presence of indexes allows the query optimizer to choose more efficient execution plans, such as index scans or index seeks, leading to faster query execution.
Considerations:

Appropriate Indexing:

It's essential to choose the right columns for indexing based on the types of queries the database will frequently encounter.
Balancing Act:

Indexing involves a trade-off between query performance and the overhead of maintaining indexes during write operations. Over-indexing can lead to increased storage requirements and slower write operations.
Regular Maintenance:

Periodic maintenance, such as rebuilding or reorganizing indexes, may be necessary to ensure optimal performance as data in the table changes over time.
In summary, indexing is a crucial aspect of database design and optimization. It significantly improves query performance by allowing the database engine to quickly locate and retrieve the relevant data, especially in scenarios where certain columns are frequently used in search conditions.


# Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment.

# Answer:

Concurrency Control:

Concurrency control is a set of techniques used to manage the simultaneous execution of multiple transactions in a multi-user database environment. In a database system, multiple users may be concurrently accessing and modifying data. Concurrency control ensures that transactions are executed in a way that preserves the consistency and integrity of the database.

Key Goals of Concurrency Control:

Isolation: Ensure that each transaction appears to execute in isolation, without interference from other transactions.

Consistency: Maintain the consistency and correctness of the database by enforcing integrity constraints.

Serializability: Ensure that the execution of transactions is equivalent to some serial order, even though transactions may be interleaved.

Concurrency Control Mechanisms:

Locking:

Locks are used to control access to data items. A transaction must obtain a lock on a data item before reading or writing it.
Types of locks include shared locks (for reading) and exclusive locks (for writing).
Timestamping:

Each transaction is assigned a unique timestamp, and transactions are ordered based on their timestamps.
Older transactions may be given priority or may be allowed to proceed first.
Multiversion Concurrency Control (MVCC):

Maintains multiple versions of a data item to allow concurrent transactions to access different versions.
Each transaction sees a snapshot of the database as it existed at the start of the transaction.
Two-Phase Locking (2PL):

Transactions are divided into two phases: a growing phase where locks are acquired, and a shrinking phase where locks are released.
Guarantees serializability and avoids certain types of anomalies.
Deadlocks in a Multi-User Database Environment:

A deadlock is a situation where two or more transactions are unable to proceed because each is waiting for the other to release a lock. Deadlocks can occur in a multi-user database environment and can lead to a state where no progress can be made.

Conditions for Deadlock:

Mutual Exclusion: At least one resource must be held in a non-sharable mode, meaning only one transaction can use it at a time.

Hold and Wait: A transaction holds a resource and is waiting for additional resources that are currently held by other transactions.

No Preemption: Resources cannot be preemptively taken away from a transaction; they must be explicitly released.

Circular Wait: There exists a circular chain of transactions, each waiting for a resource held by the next transaction in the chain.

Handling Deadlocks:

Deadlock Detection and Resolution:

Periodically check for the presence of deadlocks and take corrective action if detected.
Resolution methods may include killing one or more transactions involved in the deadlock or rolling back some transactions.
Timeouts and Rollbacks:

Set timeouts for transactions, and if a transaction cannot acquire all required locks within a specified time, roll back the transaction to release the locks.
Wait-Die and Wound-Wait Schemes:

In a wait-die scheme, older transactions wait for younger ones; in a wound-wait scheme, older transactions force younger ones to wait.
Helps in preventing deadlocks by allowing only certain types of transactions to wait.
Avoidance:

Use techniques to avoid the occurrence of deadlocks altogether.
Requires careful scheduling and resource allocation to ensure that the conditions for deadlock are not met.
Concurrency control and deadlock management are critical aspects of database management systems to ensure that multiple transactions can execute simultaneously while maintaining data integrity and preventing situations where transactions are unable to progress.


# Question 7: Read about Database sharding and explain couple of real time examples where, why, how it this concept is used.

# Answer:

Database Sharding:

Database sharding is a horizontal database partitioning technique in which a large database is divided into smaller, more manageable, and independent units called shards. Each shard is a separate database instance that stores a subset of the overall data. Sharding is employed to improve scalability, performance, and parallelism in large-scale database systems.

Key Concepts in Database Sharding:

Shard: A shard is a partition or a subset of the complete dataset, and it is typically stored on a separate server or node.

Shard Key: The shard key is a chosen attribute or set of attributes that determine how data is distributed across the shards. It's crucial for ensuring even distribution and efficient query routing.

Distributed Architecture: Shards can be distributed across multiple servers or even across different geographic locations, enabling parallel processing and reducing the load on individual nodes.

Real-Time Examples of Database Sharding:

E-commerce Platforms:

Why: E-commerce platforms often deal with a massive amount of data related to products, users, transactions, etc. As the user base and data grow, a single monolithic database might become a bottleneck.
How: Sharding can be applied based on the customer ID or geographical location. Each shard can handle the data for a specific range of customers or users, resulting in improved performance and scalability. For example, a shard could store data for customers whose IDs fall in the range of 1-10000, another for 10001-20000, and so on.
Social Media Networks:

Why: Social media platforms handle enormous volumes of user-generated content, connections, and interactions. As the user base expands, the demand on the database increases significantly.
How: Sharding can be implemented based on user IDs or geographical regions. Each shard can manage the data for a specific set of users or a specific region. For instance, users with IDs from 1-10000 could be on one shard, 10001-20000 on another, and so forth.
Gaming Applications:

Why: Online gaming platforms need to manage player profiles, achievements, in-game activities, and more. With a growing player base, the database workload can become challenging for a single server.
How: Sharding based on player IDs or game regions can be applied. Each shard can handle the data for a group of players or a specific game server region. For example, players with IDs from 1-10000 could be on one shard, 10001-20000 on another, and so on.
Financial Services:

Why: Financial institutions deal with a large volume of transaction data and customer information. The need for quick and secure access to this data requires efficient database management.
How: Sharding based on customer IDs or account numbers can be implemented. Each shard can manage the data for a specific set of customers or accounts. For example, accounts numbered from 1-10000 could be on one shard, 10001-20000 on another, and so forth.
Benefits of Database Sharding:

Scalability: Sharding allows databases to scale horizontally by adding more shards, enabling the system to handle increased loads.

Performance: With data distributed across multiple shards, query performance can be improved as each shard works independently, reducing contention.

Fault Isolation: Sharding provides fault isolation, ensuring that issues with one shard do not affect the entire database.

Parallel Processing: Sharding allows for parallel processing of queries across multiple shards, enhancing overall system performance.

While database sharding offers significant benefits, it also introduces challenges such as managing distributed transactions, ensuring data consistency, and handling shard rebalancing. Organizations typically adopt sharding strategies based on their specific use cases, data distribution patterns, and scalability requirements.