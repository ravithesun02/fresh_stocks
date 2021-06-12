import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Button, Card, CardContent, CardHeader, CardMedia, Grid, Paper, Toolbar, Typography, withStyles } from '@material-ui/core';
import {loadData} from '../api/api-data';

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
        justify: 'space-around',
        paddingTop:'4%'
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

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            pageNo : 1,
            dataPerPage:0,
            isLoading:true,
            products:[],
            hasMore:true
        }

        this.handleScroll=this.handleScroll.bind(this);
    }

    async componentDidMount() {
        let perPage=Math.ceil(window.innerHeight/300);
       await this.setState({
            dataPerPage:perPage
        });
       await this.loadCurrData(); 
       window.addEventListener('scroll', this.handleScroll);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

   async handleScroll(event){
       if(window.scrollY + window.innerHeight >= document.body.scrollHeight)
        {
           await this.setState({
                pageNo:this.state.pageNo+1,
                isLoading:true
            });

            await this.loadCurrData();
        }

    }

    async loadCurrData(){
        let res=await loadData({pageNo:this.state.pageNo,dataPerPage:this.state.dataPerPage});
        await this.setState({
            products:res.products,
            isLoading:false,
            hasMore:res.hasMore
        });

        if(!this.state.hasMore) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

  

    render() {
        const {classes}=this.props;
        return(
            <div className={classes.root}>
                <React.Fragment>
                <AppBar position="fixed">
                    <Toolbar>
                        <Grid container justify="center">
                        <h4>Fresh Stock</h4>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                </React.Fragment>
               <Grid className={classes.mainGrid} container>
               
               {
                    this.state.products.map((item,index)=>{
                        return(
                            <Grid key={index} md={4} xs={12} item style={{"padding":'1%'}}>
                                <Card  className={classes.paper} elevation={3}>
                                    <CardContent>
                                        <Grid direction="row" container justify="space-around">
                                            <h4>Gender : {item.gender}</h4>
                                            <h4>Color : {item.primaryColour}</h4>
                                        </Grid>
                                    </CardContent>
                                    <CardContent>
                                        <img src={item.images[0].src} width="80%" height="50%" />
                                    </CardContent>
                                    <CardContent>
                                        <Grid container direction="column">
                                           <h4> {item.brand} </h4>
                                           <h4> {item.productName} </h4> 
                                           <h4> Cost : {item.price} </h4>
                                           <Link to="/cart">
                                           <Button color="primary" variant="contained">
                                               Add To Cart
                                           </Button>
                                           </Link>
                                        </Grid>
                                    </CardContent>
                                </Card>
                                </Grid>
                        )
                    })
                }

                {
                    this.state.isLoading && this.state.hasMore &&
                    <Grid item xs={12}>
                        <h4>Loading . . .</h4>
                    </Grid>
                }
                
                </Grid> 
            </div>
        )
    }

}

export default withStyles(useStyles)(Home);