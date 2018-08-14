import React, {Component} from 'react'
import {connect} from "react-redux"
import compose from 'recompose/compose'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { fetchProducts } from '../redux/actions/productsActions'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends Component {

  componentDidMount(){
    this.props.fetchProducts()
  }
 

  render() {

    return (
      <div>
        <h2>ciao</h2>
        <Button variant="contained" color="secondary">
          Super Secret Password
        </Button>
        <Grid container spacing={16}>
        {
          this.props.productsStore.products.map((item) => {
            return (
              <Grid item xs={6}>
              <div key={item.id}>
                <img src={item.post.image} />
                <h4>{item.post.name}</h4>
              </div>
              </Grid>
            )
          })
        }
        </Grid>
      </div>
    )
  }
}


export default compose(
  withStyles(styles),
  connect((state) => ({ productsStore: state.productsReducer }),{fetchProducts})
)(Index)

