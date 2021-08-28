import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import PropTypes from 'prop-types';
import { Avatar, IconButton, CardMedia, Snackbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { remove, removeLast, add } from '../../redux/ducks/cart';

const Product = props => {
  const {
    avatarUrl,
    title,
    subtitle,
    description,
    imageUrl,
    price,
    isCart
  } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const addToCart = cart => {
    setOpen(false);
    dispatch(add({ ...cart, cartId: Math.round(Math.random() * 999999999) }));
    setOpen(true);
  };

  const removeLastFromCart = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    dispatch(removeLast());
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar src={avatarUrl} />}
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={title}
          subheader={subtitle}
        />
        <CardMedia style={{ height: '150px' }} image={imageUrl} />
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <h1>
            <Typography variant="body1" component="p">
              {price}
            </Typography>
          </h1>
        </CardContent>
        <CardActions>
          {!isCart && (
            <Button
              size="small"
              onClick={() => {
                addToCart(props);
                history.push('/cart');
              }}
            >
              BUY NOW
            </Button>
          )}
          {isCart ? (
            <Button size="small" onClick={() => dispatch(remove(props))}>
              REMOVE
            </Button>
          ) : (
            <Button size="small" onClick={() => addToCart(props)}>
              ADD TO CART
            </Button>
          )}
        </CardActions>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Added to cart"
        action={
          <>
            <Button color="secondary" size="small" onClick={removeLastFromCart}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={removeLastFromCart}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  );
};

Product.propTypes = {
  avatarUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  isCart: PropTypes.bool
};

export default Product;
