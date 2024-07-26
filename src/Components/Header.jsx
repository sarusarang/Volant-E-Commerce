import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShowCart } from '../Services/AllApi';
import { useSelector,useDispatch } from 'react-redux';
import { AddHeader } from '../STORE/CartSlice';

function Header() {


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  const Dispatch = useDispatch()


  const {CartStatus} = useSelector((state)=>state.CartRed)



  const id = sessionStorage.getItem("_id")



  const [CartLength,setCartLength] = useState([])


  useEffect(() => {


    const cartitems = async () => {

      try {

        if(id){

          const res = await ShowCart(id)

          if(res.status == 200){


            setCartLength(res.data)


          }
          else{

            setCartLength([])

          }

        }

      }
      catch (err) {

        console.log(err);

      }

    }

    cartitems()


  },[CartStatus])


  return (

    <>


      <nav className='w-100  d-flex justify-content-between shadow border'>

        <div className='nav-logo'>

          <img src="/volantlogo-Logo.png" className='img-fluid' alt="" />


        </div>


        <div className='navigation  d-flex align-items-center'>

          <Link to={'/'} className='nav-link head-link me-3'>Home</Link>



          <div className='dropdown'>

            <span className='head-link hover-head'>Gents<i class="fa-solid fa-caret-down"></i></span>

            <div class="dropdown-content">

              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Gents',category:'Sandals'}))}}>Sandals</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Gents',category:'Sliper And Flip Flops'}))}}>Sliper And Flip Flops</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Gents',category:'Flat Shoes'}))}}>Flat Shoes</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Gents',category:'Casual Shoes'}))}}>Casual Shoes</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Gents',category:'Specail Collections'}))}}>Specail Collections</Link>


            </div>

          </div>


          <div className='dropdown'>

            <span className='head-link'>Ladies<i class="fa-solid fa-caret-down"></i></span>

            <div class="dropdown-content">

              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Ladies',category:'Sandals'}))}}>Sandals</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Ladies',category:'Sliper And Flip Flops'}))}}>Sliper And Flip Flops</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Ladies',category:'Flat Shoes'}))}}>Flat Shoes</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Ladies',category:'Casual Shoes'}))}}>Casual Shoes</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Ladies',category:'Womens Specail'}))}}>Women's Specail</Link>


            </div>

          </div>




          <div className='dropdown'>

            <span className='head-link'>Boys And Girls<i class="fa-solid fa-caret-down"></i></span>

            <div class="dropdown-content">

              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Kids',category:'Sandals'}))}}>Sandals</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Kids',category:'Shoes'}))}}>Shoes</Link>
              <Link to={'/list'} className='drop-link' onClick={()=>{Dispatch(AddHeader({gender:'Kids',category:'School collections'}))}}>School Collections</Link>


            </div>

          </div>



          <div className='dropdown'>

            <span className='head-link'>Kid's<i class="fa-solid fa-caret-down"></i></span>

            <div class="dropdown-content">

              <Link to={''} className='drop-link'>Sandals</Link>
              <Link to={''} className='drop-link'>Shoes</Link>

            </div>

          </div>

          <Link to={'/ord'} className='nav-link  me-4'><i class="fa-solid fa-bag-shopping"></i></Link>

          <Link to={'/cart'} className='nav-link me-4'>

            <IconButton aria-label="cart">

              <StyledBadge badgeContent={CartLength.length} showZero color="success" anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >

                <ShoppingCartIcon style={{ color: '#000' }} />

              </StyledBadge>

            </IconButton>


          </Link>

          <Link to={'/auth'} className='nav-link'><i class="fa-solid fa-user"></i></Link>


        </div>


      </nav>



    </>



  )



}

export default Header