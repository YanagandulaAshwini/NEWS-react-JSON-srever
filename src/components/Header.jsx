import React from 'react';

 const Header = () => {
    return(  
        <nav class="navbar navbar-expand-lg navbar-light bg-warning" >
  <a class="navbar-brand" href="#">NewsApi</a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Aboutus</a>
      </li>  
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>  
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>  
    </ul>
  </div>
</nav>
    )  
}

export default Header;
