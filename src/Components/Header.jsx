import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


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

              <Link to={''} className='drop-link'>Sandals</Link>
              <Link to={''} className='drop-link'>Sliper And Flip Flops</Link>
              <Link to={''} className='drop-link'>Flat Shoes</Link>
              <Link to={''} className='drop-link'>Casual Shoes</Link>
              <Link to={''} className='drop-link'>Specail Collections</Link>


            </div>

          </div>


          <div className='dropdown'>

            <span className='head-link'>Ladies<i class="fa-solid fa-caret-down"></i></span>

            <div class="dropdown-content">

              <Link to={''} className='drop-link'>Sandals</Link>
              <Link to={''} className='drop-link'>Sliper And Flip Flops</Link>
              <Link to={''} className='drop-link'>Flat Shoes</Link>
              <Link to={''} className='drop-link'>Casual Shoes</Link>
              <Link to={''} className='drop-link'>Women's Specail</Link>


            </div>

          </div>




          <div className='dropdown'>

            <span className='head-link'>Boys And Girls<i class="fa-solid fa-caret-down"></i></span>

            <div class="dropdown-content">

              <Link to={''} className='drop-link'>Sandals</Link>
              <Link to={''} className='drop-link'>Shoes</Link>
              <Link to={''} className='drop-link'>School Collections</Link>


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

              <StyledBadge badgeContent={0} showZero color="success" anchorOrigin={{vertical:'top' , horizontal:'right'}} >

                <ShoppingCartIcon style={{color:'#000'}} />

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