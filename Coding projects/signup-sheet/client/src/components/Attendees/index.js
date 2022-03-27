import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const Attendees = ({ attendees }) => (
  <>
    <h2>Attendees</h2>
    <List dense={true}>
      {attendees.map(a => (
        <ListItem key={a.id}>
          <ListItemAvatar>
            <Avatar src={a.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={a.displayName}
          />
        </ListItem>
      ))}
    </List>
  </>
)

export default Attendees;