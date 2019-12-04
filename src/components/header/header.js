import React, {Component} from 'react';
import './header.scss'
import Grid from '@material-ui/core/Grid';
import header_logo from '../../assets/header_logo.png';
import { Button, MenuItem } from '@material-ui/core';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as headerActions from "../../store/header/actions";
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
            <span className="menu-item">Home</span>
            <span className="menu-item">Services</span>
            <span className="menu-item">Team</span>
            <span className="menu-item">Pricing</span>
            <span className="menu-item">Testimonial</span>
        </Grid>      
      </Grid>;
    }
  }
// export default connect(
//     ({ header }) => ({ ...header }),
//     dispatch => bindActionCreators({ ...headerActions }, dispatch)
//   )( header );