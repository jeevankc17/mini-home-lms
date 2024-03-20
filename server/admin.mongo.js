import bcrypt from 'bcrypt';
import { MongoClient } from 'mongodb';

// Connection URI
const uri = 'mongodb+srv://jeevankc17:jeevankc17@cluster0.ccu52mt.mongodb.net/';
// Database Name
const dbName = 'tutortrek';

// Hash a password
const saltRounds = 10; // Number of salt rounds to use for hashing
const plainTextPassword = "admin1234";

bcrypt.hash(plainTextPassword, saltRounds, async (err, hashedPassword) => {
    if (err) {
        console.error("Error hashing password:", err);
        return;
    }

    // Create a new MongoClient
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected to MongoDB server");

        // Get the database
        const db = client.db(dbName);

        // Insert a user with hashed password into the database
        const result = await db.collection('admin').insertOne({
            email: "admin@gmail.com",
            password: hashedPassword,
            
        });

        console.log("User inserted:", result.insertedId);
    } catch (error) {
        console.error("Error inserting user:", error);
    } finally {
        // Close the client
        await client.close();
        console.log("Disconnected from MongoDB server");
    }
});
