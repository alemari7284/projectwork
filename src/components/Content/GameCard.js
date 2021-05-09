import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


function GameCard(props) {
    return (
        <Card>
          <CardHeader
            title={props.title}
          />
          <CardMedia
            src={props.url}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This is a fucking game
            </Typography>
          </CardContent>
        </Card>
      );
}

export default GameCard;
