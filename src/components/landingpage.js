import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

class LandingPage extends React.Component{
    render() {
        return(
        <div>
            <h1>Landing Page, <small>Hello World!</small></h1>
            <Button variant={"contained"} color={"primary"}> Hello World! </Button>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Card with image" height="140" image="https://www.placehold.it/300x140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Card with image" height="140" image="https://www.placehold.it/300x140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Card with image" height="140" image="https://www.placehold.it/300x140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Card with image" height="140" image="https://www.placehold.it/300x140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Card with image" height="140" image="https://www.placehold.it/300x140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Card with image" height="140" image="https://www.placehold.it/300x140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Card with image" height="140" image="https://www.placehold.it/300x140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Card with image" height="140" image="https://www.placehold.it/300x140" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Lizard</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
            
        );
    }

}
export default LandingPage;
