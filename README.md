# Midterm Project
**Video object**
```
{
        url_thumbnail: {
            type: String,
            required: true,
        }
}
```
**Post /videos**
----
Create new video

**Get /videos/:id**
----
Get video thumbnail 


**Comment object**
```
{
        username: {
            type: String,
            required: true,
        },
        comment_text: {
            type: String,
            required: true,
        },
        video_id: {
            type: String,
            required: true,
        },
        create_at: {
            type: String,
            default: Date.now,
        }
}
```

**Post /comments**
----
Creates a new comment

**Get /videos/:video_id/comment**
----
Get comment by video id


**Product object**
```
{
        link: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        video_id: {
            type: String,
            required: true,
        }
}
```
**Post /product**
----
Create new product

**Get /videos/:video_id/product**
----
Get product by video id
