import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

export const NewsListItem = ({
  id,
  title,
  shortDescription,
  category
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
      <Button size="small">More details..</Button>
    </CardActions>
  </Card>
)