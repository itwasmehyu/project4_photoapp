import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
/**
 * Define UserDetail, a React component of Project 4.
 */
import models from "../../modelData/models";

function UserDetail() {
    const { userId } = useParams();
    const user = models.userModel(userId);
    return (
        <>
          <Typography variant="h4">{user.first_name} {user.last_name}</Typography>
          <Typography variant="body1">ID: {user._id}</Typography>
          <Typography variant="body1">First Name: {user.first_name}</Typography>
          <Typography variant="body1">Last Name: {user.last_name}</Typography>
          <Typography variant="body1">Location: {user.location}</Typography>
          <Typography variant="body1">Description:: {user.description}</Typography>
          <Typography variant="body1">Occupation: {user.occupation}</Typography>
          <Link to={`/photos/${userId}`}>View Photos</Link>
        </>
    );
}

export default UserDetail;
