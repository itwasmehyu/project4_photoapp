import React from "react";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

function UserPhotos() {
  const { userId } = useParams();
  const userPhotos = models.photoOfUserModel(userId);
  return (
    <div>
      {userPhotos.map((photo) => (
        <Card key={photo._id}>
          <CardMedia
            component="img"
            sx={{
              aspectRatio: "16/9",
              width: "100%",
            }}
            image={`/images/${photo.file_name}`}
            alt={photo.file_name}
          />
          <CardContent>
            <Typography variant="body1">
              Created at: {new Date(photo.date_time).toLocaleString()}
            </Typography>
            {photo.comments &&
              photo.comments.map((comment) => (
                <div key={comment._id}>
                  <Typography variant="body1">
                    <a href={`/users/${comment.user._id}`}>
                      <Typography variant="body1">
                        User comment: {comment.user.first_name}
                      </Typography>
                    </a>
                  </Typography>
                  <Typography variant="body1">
                    User comment at: {comment.date_time}
                  </Typography>
                  <Typography variant="body1">{comment.comment}</Typography>
                </div>
              ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
