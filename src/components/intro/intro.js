import React, {Component} from 'react';
import './intro.scss'
import Grid from '@material-ui/core/Grid';
import header_right from '../../assets/header_right.png';

export default class Intro extends Component {

  render() {
    return <Grid
      className='container'
      container
      direction='row'
      justify='space-between'
      alignItems='center' >
        <Grid
          xs={12} sm={5} md={6} lg={6}
          container item
          direction='column'
          alignItems='flex-start'>
            <h1 className='title'>App, Business &amp; SASS Landing Page Template</h1>
            <span>Lorem ipsum dolor sit amet, consectetur acipiscing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! fugiat! fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat!</span>
        </Grid>
        <img className='left-img' item xs={12} sm={7} md={4} lg={4} src={header_right}></img>
    </Grid>;
  }
}