import "./styles.css";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Provider, UpdownButton } from "@lyket/react";
import Pagination from './components/Pagination';



export default function App() {
return (
    <div style={{}}>
      <h4>FILMS</h4>
      <Card
        style={{
          width: 200,
          backgroundColor: "red",
        }}
      >
        <CardContent>
          
          <Typography variant="h5" component="h2">
            Oceans 8
          </Typography>
          
          
          <Typography variant="body2" component="p">
            Comedy
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Supprimer</Button>
        </CardActions>
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
  <UpdownButton
    namespace="my-documentation"
    id="like_dislike_buttons"
  />
</Provider>
  
      </Card>

      <Card
        style={{
          width: 200,
          backgroundColor: "yellow",
        }}
      >
        <CardContent>
          
          <Typography variant="h5" component="h2">
            Midnight sun
          </Typography>
          
          
          <Typography variant="body2" component="p">
            Comedy
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Supprimer</Button>
        </CardActions>
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
  <UpdownButton
    namespace="my-documentation"
    id="like_dislike_buttons"
  />
</Provider>

      </Card>

      <Card
        style={{
          width: 200,
          backgroundColor: "red",
        }}
      >
        <CardContent>
          
          <Typography variant="h5" component="h2">
            Les indestructibles
          </Typography>
          
          
          <Typography variant="body2" component="p">
            Animation
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Supprimer</Button>
        </CardActions>
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
  <UpdownButton
    namespace="my-documentation"
    id="like_dislike_buttons"
  />
</Provider>
  
      </Card>

      <Card
        style={{
          width: 200,
          backgroundColor: "yellow",
        }}
      >
        <CardContent>
          
          <Typography variant="h5" component="h2">
            Sans un bruit
          </Typography>
          
          
          <Typography variant="body2" component="p">
            Thriller
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Supprimer</Button>
        </CardActions>
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
  <UpdownButton
    namespace="my-documentation"
    id="like_dislike_buttons"
  />
</Provider>
  
      </Card>

    </div>
  );
}
