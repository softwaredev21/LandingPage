import React, {Component} from 'react';
import './header.scss'
import Grid from '@material-ui/core/Grid';
import header_logo from '../../assets/header_logo.png';

export default class Header extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    
    render() {
      return <Grid 
        container
        className="component-header"
        direction="row"
        justify="space-between"
        alignItems="flex-end"
      >
        <img className="logo" src={header_logo}></img>  
        <Grid
          container
          item xs={10}
          direction="row"
          justify="flex-end"
          alignItems="flex-end">
            <a className="menu-item" href={''}>Home</a>
            <a className="menu-item" href={''}>Services</a>
            <a className="menu-item" href={''}>Team</a>
            <a className="menu-item" href={''}>Pricing</a>
            <a className="menu-item" href={''}>Testimonial</a>
        </Grid>      
      </Grid>;
    }
  }
  
// export default connect(
//     ({ header }) => ({ ...header }),
//     dispatch => bindActionCreators({ ...headerActions }, dispatch)
//   )( header );