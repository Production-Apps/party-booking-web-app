import React from 'react';
import Item from './Item.js';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function Store() {
  const classes = useStyles();

  const tileData = [
    {
      img:
        'https://i5.walmartimages.com/asr/22203443-fdff-4378-b0e7-6caa3f6bb527_1.ac832f82929c64340ee048444e6f39e3.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      title: 'Chairs',
      Description: 'Description',
    },
    {
      img:
        'https://i.pinimg.com/originals/d2/23/3f/d2233f0596bcdc4b4a14f03a9b5a1309.jpg',
      title: 'Tables',
      Description: 'Description1',
    },
    {
      img:
        'https://cdn11.bigcommerce.com/s-wyud6/images/stencil/1280x1280/products/208/843/25917__85446.1457454965.jpg?c=2?imbypass=on',
      title: 'Tent',
      Description: 'Description1',
    },
    {
      img:
        'https://www.homeartmania.com/wp-content/uploads/2016/08/Backyard-party-decor-and-hacks-1.jpg',
      title: 'Decor',
      Description: 'Description1',
    },
  ];

  const addToCart = (props) => {
    console.log('Hello');
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Store</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Details: {tile.Description}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                  onClick={(props) => this.addToCart}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
