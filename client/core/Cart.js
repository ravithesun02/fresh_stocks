import { Button, Grid, withStyles } from '@material-ui/core';
import React , {Component} from 'react';
import { Link } from 'react-router-dom';

const useStyles=theme=>({
    root:{
        flexGrow:1,
        background: 'light-grey'
    },
    paper:{
        textAlign:'center'
    },
    mainGrid:{  
        spacing: 0,
        justify: 'space-around'
    },
    midGrid:{
        padding:'2%',
        justify:'space-evenly'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      }
});

class Cart extends Component {

    render() {
        const {classes}=this.props;
        return (
            <div className={classes.root}>
                <Grid direction="column" className={classes.mainGrid} container>
                    <Grid xs={12} item>
                        <h4>Item added to cart</h4>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/">
                            <Button variant="contained" color="primary">
                                Back
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(useStyles)(Cart);