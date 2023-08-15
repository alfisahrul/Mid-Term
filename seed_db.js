const { MongoClient } = require("mongodb");

const url = "mongodb://0.0.0.0:27017";
const dbName = "TokpedPlay";

const videosData = [
    {
        videoID: "video001",
        thumbnailURL: "https://www.youtube.com/watch?v=244b8-Yf-I8",
    },
    {
        videoID: "video002",
        thumbnailURL: "https://www.youtube.com/watch?v=6v8JXecArqE&t=1397s",
    },
    {
        videoID: "video003",
        thumbnailURL: "https://www.youtube.com/watch?v=fQbTeNX1mvM&t=5527s",
    },
    {
        videoID: "video004",
        thumbnailURL: "https://www.youtube.com/watch?v=244b8-Yf-I8",
    },
    {
        videoID: "video005",
        thumbnailURL: "https://www.youtube.com/watch?v=KwfRFkHAlVo&t=2356s",
    },
    {
        videoID: "video006",
        thumbnailURL: "https://www.youtube.com/watch?v=f8N0V-1dC0o&t=41s",
    },
    {
        videoID: "video007",
        thumbnailURL: "https://www.youtube.com/watch?v=xYBclb-sYQ4&list=PL-CtdCApEFH_P2_2zR6pvDublvpD3fF6W",
    },
    {
        videoID: "video008",
        thumbnailURL: "https://www.youtube.com/watch?v=iEeveYoD0SA&t=133s",
    },
    {
        videoID: "video009",
        thumbnailURL: "https://www.youtube.com/watch?v=S4igMZFCvh8&t=88s",
    },
    {
        videoID: "video010",
        thumbnailURL: "https://i.ytimg.com/an_webp/f8N0V-1dC0o/mqdefault_6s.webp?du=3000&sqp=CIDU66YG&rs=AOn4CLDQClui6xK180T_PzMe7gHDBeXjvQ",
    },
];

const productsData = [
    {
        videoID: "video001",
        productId: "product001",
        link: "https://example.com/product001",
        title: "OOP",
        price: 10,
    },
    {
        videoID: "video001",
        productId: "product002",
        link: "https://example.com/product002",
        title: "TypeScript",
        price: 9.99,
    },
    {
        videoID: "video001",
        productId: "product003",
        link: "https://example.com/product003",
        title: "Java",
        price: 9.9,
    },
    {
        videoID: "video001",
        productId: "product004",
        link: "https://example.com/product004",
        title: "Laravel",
        price: 2.22,
    },
    {
        videoID: "video001",
        productId: "product005",
        link: "https://example.com/product005",
        title: "Kotlin",
        price: 8.9,
    },
    {
        videoID: "video002",
        productId: "product006",
        link: "https://example.com/product006",
        title: "",
        price: 39.99,
    },
    {
        videoID: "video002",
        productId: "product007",
        link: "https://example.com/product007",
        title: "Docker",
        price: 24.99,
    },
    {
        videoID: "video002",
        productId: "product008",
        link: "https://example.com/product008",
        title: "Kubernetes",
        price: 12.99,
    },
    {
        videoID: "video002",
        productId: "product009",
        link: "https://example.com/product009",
        title: "AWS",
        price: 50.99,
    },
    {
        videoID: "video002",
        productId: "product010",
        link: "https://example.com/product010",
        title: "Next.js",
        price: 20.11,
    },
];

const commentsData = [
    {
        videoID: "video001",
        username: "Tinker",
        comment: "Woww thats amazing",
        timestamp: new Date(),
    },
    {
        videoID: "video001",
        username: "Skye",
        comment: "Yeah true ",
        timestamp: new Date(),
    },
    {
        videoID: "video002",
        username: "Nevermore",
        comment: "Looking good",
        timestamp: new Date(),
    },
    {
        videoID: "video002",
        username: "Barathrum",
        comment: "How would you do that",
        timestamp: new Date(),
    },
    {
        videoID: "video003",
        username: "Kadita",
        comment: "Lets go cool",
        timestamp: new Date(),
    },
    {
        videoID: "video003",
        username: "Chamber",
        comment: "Keep up the good work",
        timestamp: new Date(),
    },
    {
        videoID: "video004",
        username: "Wattson",
        comment: "Yip Yip Huha",
        timestamp: new Date(),
    },
    {
        videoID: "video004",
        username: "Emma",
        comment: "Dont try this at home",
        timestamp: new Date(),
    },
    {
        videoID: "video005",
        username: "John",
        comment: "I am so confused",
        timestamp: new Date(),
    },
    {
        videoID: "video005",
        username: "Carl",
        comment: "Let it go",
        timestamp: new Date(),
    },
];


async function createDummyData() {
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Get the reference to the database
        const db = client.db(dbName);

        // Drop the database if it already exists
        await db.dropDatabase();

        // Create the "videos" collection and insert dummy data
        const videosCollection = db.collection("videos");
        await videosCollection.insertMany(videosData);

        // Create the "products" collection and insert dummy data
        const productsCollection = db.collection("products");
        await productsCollection.insertMany(productsData);

        // Create the "comments" collection and insert dummy data
        const commentsCollection = db.collection("comments");
        await commentsCollection.insertMany(commentsData);

        console.log("Dummy data inserted successfully.");

    } catch (err) {
        console.error("Error:", err);
    } finally {
        // Close the client
        client.close();
    }
}

// Call the function to create the dummy data
createDummyData();
