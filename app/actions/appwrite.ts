"use server";
// import { Client, Databases, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('67a9b207001a310f9e7d');

// const databases = new Databases(client);

// const promise = databases.createDocument(
//     '67a9b7820036a81fe39f',
//     '67a9b7a10025e966cf2d',
//     ID.unique(),
//     {
//         "title": "Modern Minimalist Apartment",
//         "description":
//             "A sleek and minimalist design for a city apartment, focusing on clean lines and functional spaces. The project transformed a cluttered space into an open, airy environment that maximizes natural light and creates a sense of calm.",
//         "location": "Lagos, Nigeria",
//         "images": [
//             "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//             "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
//             "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
//             "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
//             "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
//         ],
//         "category": "Residential",
//         "completionDate": "2023-05-15",
//         "area": 1200,
//         "clientName": "John & Sarah Thompson",
//         "designerName": "Emma Rodriguez",
//         "beforeImage":
//             "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
//         "afterImage":
//             "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     }
// );

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });



import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67a9b207001a310f9e7d")

const databases = new Databases(client);

let promise = databases.listDocuments(
    "67a9b7820036a81fe39f",
    "67a9b7a10025e966cf2d",
);


promise.then(function (response) {
    console.log("first response: ");
    console.log(response);
}, function (error) {
    console.log(error);
});



export const GetProjects = (async () => {

    const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("67a9b207001a310f9e7d")

    const databases = new Databases(client);

    try {
        const projects = await databases.listDocuments(
            "67a9b7820036a81fe39f",
            "67a9b7a10025e966cf2d"
        );
        // console.log("products: ", products)
        return projects;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
});