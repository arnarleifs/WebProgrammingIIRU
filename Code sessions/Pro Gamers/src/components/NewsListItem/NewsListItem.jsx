import { Card, CardActions, CardContent, Button, Typography, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NewsListItem = ({
  id,
  title,
  shortDescription,
  category,
  onDelete,
  onEdit,
}) => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {category}
      </Typography>
      <Typography variant="body2">
        {shortDescription}
      </Typography>
    </CardContent>
    <CardActions>
      <ButtonGroup>
        <Button variant="outlined" onClick={() => onEdit(id)}>Edit item</Button>
        <Button variant="outlined" color="error" onClick={() => onDelete(id)}>
          Delete item
        </Button>
        <Button variant="text">
          <Link to={`/news/${id}`}>More details...</Link>
        </Button>
      </ButtonGroup>
    </CardActions>
  </Card>
);

NewsListItem.propTypes = {
  // The id of the news item
  id: PropTypes.number.isRequired,
  // The title of the news item
  title: PropTypes.string.isRequired,
  // The short description of the news item
  shortDescription: PropTypes.string.isRequired,
  // The category of the news item
  category: PropTypes.string.isRequired,
  // The function which is called when you delete the item
  onDelete: PropTypes.func,
  // The function which is called when you edit the item
  onEdit: PropTypes.func
};