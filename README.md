# GG Final Project

Welcome to the TokpedPlay Clone App API documentation. This API allows you to manage videos, comments, and products.

## 🛠️ Installation

To build this project run on your local
1. Use the package manager [npm].
2. Clone the Server first
```bash
$ git clone https://github.com/alfisahrul/Tokped-Play-Clone-BE.git
```

3. Install the depedency for install the node_modules

```
$ npm install
```
4. For the backend or server you should do this first to add database

```
$ node seed.js
``` 

5. Last, you need to run the server and make sure you are conneccted to the internet

```
$ npm run dev
```

Acces the website on your browser

```
http://localhost:5173
```


## 📁Database Structure
Database: `mid_term_db`

Colletions:
1. `videos` : This collection will store information about each video data.

   document structure

   **#Videos Object**
    ```
    {
        _id: string
        url_thumbnail: string
    }
    ```

2. `products` : This collection will store information about each product data.

   document structure

   **#Products Object**
    ```
    {
        _id: string
        link: string
        title: string
        price: integer
        video_id: string
    }
    ```

3. `comments` : This collection will store information about each comment data.

   document structure

   **#Comments Object**
    ```
    {
        _id: string
        username: string
        comment_text: string
        video_id: string
        created_at: string
    }
    ```

## 🌐API Structure
Flow from request to get response.
### Videos
```
**GET /videos**
```
request -> routes -> controller [getAllVideos()] -> services [getAllVideosServices()] -> repository [getAllVideos()] -> response
```
### Products
---
```
**GET /videos/:id/products**
```
request -> routes -> controller [getProductByVideoId()] -> services [getProductByVideoIdService()] -> repository [getProductByVideoId()] -> response
```

### Comments
---
**POST /comments**
```
request -> routes -> controller [createComment()] -> services [createCommentServices()] -> repository [addComment()] -> response
```
**GET /videos/:id/comments**
```
request -> routes -> controller [getCommentByVideoId()] -> services [getCommentByVideoIdService()] -> repository [getCommentByVideoId()] -> response
```

## List API
### Videos
#### **POST /videos**
---
Create a new video and return the new object
* **URL Params**

  None
* **Headers**

  Content-Type: application/json
* **Body**
```
{
    url_thumbnail: string
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```
{
    data: {
        _id: string,
        url_thumbnail: string,
    }
}
```

#### **GET /videos**
---
Returns all videos in the system.

* **URL Params**

  None
* **Headers**

  Content-Type: application/json
* **Body**

  None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```
{
    data: [
        {<video_object>},
        {<video_object>},
        {<video_object>}
    ]
}
```
#### **GET /videos/:id**
---
Returns the specified videos.

* **URL Params**

  *Required:* `id=[integer]`
* **Headers**

  Content-Type: application/json
* **Body**

  None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```
{
    data: {
        _id: string,
        url_thumbnail: string,
    }
}
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: `{ error: "can't find the video id" }`

### Products
#### **POST /products**
--- 
Create a new product and return the new object
* **URL Params**

  None
* **Headers**

  Content-Type: application/json
* **Body**
```
{
    link: string,
    title: string,
    price: string,
    video_id: string
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```
{
    data: {
        _id: string,
        link: string,
        title: string,
        price: string,
        video_id: string
    }
}
```
#### **GET /videos/:id/products**
---
Returns the specified product by video id params.

* **URL Params**

  *Required:* `video_id=[integer]`
* **Headers**

  Content-Type: application/json
* **Body**

  None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```
{
    data: {
        _id: string,
        link: string,
        title: string,
        price: string,
        video_id: string
    }
}
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: `{ error: "can't find the video id" }`


### Comments
#### **POST /comments**
---
Create a new comments and return the new object
* **URL Params**

  None
* **Headers**

  Content-Type: application/json
* **Body**
```
{
    username: string,
    comment_text: string,
    video_id: string
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```
{
    data: {
        _id: string,
        username: string,
        comment_text: string,
        video_id: string,
        created_at: string
    }
}
```
**GET /videos/:id/comments**
---
Returns the specified comment by video id params.

* **URL Params**

  *Required:* `video_id=[integer]`
* **Headers**

  Content-Type: application/json
* **Body**

  None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```
{
    data: {
        _id: string,
        username: string,
        comment_text: string,
        video_id: string,
        created_at: string
    }
}
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: `{ error: "can't find the video id" }`
