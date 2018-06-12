import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;

  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  }

  #app {
    background-color: #000;
    min-height: 100%;
    min-width: 100%;
    background-size: cover;
    /* background-image: url('http://img18.laughinggif.com/pic/HTTP3Bvcy5qdW5naGVlbXVuLmNvbS9pbWFnZXMvbmlnaHRfc2t5X2FuaW1hdGVkX2J5X3RveHRoZWVyaXNpYW4tZDRnaDljdC5naWYlog.gif');*/
    /*http://img43.laughinggif.com/pic/HTTPS9tZWRpYS5naXBoeS5jb20vbWVkaWEvYVJaNHZUc0hueVc2QS9naXBoeS5naWYlog.gif*/
  }

  p,
  legend{
    /*font-family: Georgia, Times, 'Times New Roman', serif;*/
    /*line-height: 2.5em;*/
    color:#fff;
  }

  ::-webkit-input-placeholder {color: grey; opacity: 0.4;}
  ::-moz-placeholder          {color: grey; opacity: 0.4;}/* Firefox 19+ */
  ::-ms-input-placeholder     {color: grey; opacity: 0.4;}

  a {
    text-decoration: none;
    color: #41addd;
      &:hover {
        color: #6cc0e5;
      }
  }

 .footer {
    color: #fff;
  }

  .li-image {
    list-style-tape: none!important;
  }

  ul > li {
    float: left;
   margin-left: 10px;
    /*margin-bottom: 10px;*/
  }
  
  .categories-ul{
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /*------------------------ Helper Style  ----------------------------------*/
  .marginLeft20 {
    margin-left: 20px;

  }
  .color-wite span {
    color: #fff;
  }
 
  /*--------------- CharacterPage CSS ------------------------------------*/
  .box-container-character {
    
  @media (min-width: 600px) {
    display: flex ;
    align-items: stretch;
    flex-direction: row;
  }
  }
  
   .box-container-character div {
    padding: 10px; 
  }
  .box-content-char {
    flex:4;  
  }

  .box-sidebar-char {
    flex:2;
    width: 200px; 
  }

.character-page-img { 
  background-size: cover; 
  border: 1px solid black; 
  width: 250px; 
  height: 350px;
  background-color: #272424;
  flex: 2;
  order: 1;
  }

.character-page-options {
    margin-left: 30px;
    flex: 4;
    order: 2;
 
}

.character-page-options b {
  margin-right: 10px;
}

.character-name{
   margin-left: 100px;
}

/*-------------------------- Form groupe -------------------------------------*/
.form-control {
  border: 2px solid #41ADDD;
  border-radius: 4px;
  color: #fff;
  padding: 7px;
}
.form {
  display: inline-flex;
}
.btn-1 {
  color: #fff;
  border: 2px solid #41ADDD;
  border-radius: 4px;
  padding: 0;
}

input[type="text"] {
   /* width: 200px;
    height: 20px;
    padding-right: 50px;*/
}

button[type="reset"] {
    margin-left: -30px;
    color: #fff;
    width: 30px;
  
}

.comment{
  display: flex;
 }

.user-img{
 
  width: 35px; 
  height: 35px;
  background-color: #272424;
 }

.user-comment {
  color: #41ADDD;
  font-weight: 700;
}
.text-comment{
  color:#fff;
  
  border-bottom: 1px dotted #999;
}

.form  {
  margin-top: 20px;
  
}

 .comment-li {display: flex;
   flex-direction: column;}
 .form-n {
    width:100%
  }
  .form-input {
    width:95%
  }
 
/*--------------------------- Basket --------------------------------------*/
.main-basket-container {
   border-bottom: 1px solid grey;
  }

.basket-container {
    border-bottom: : 3px solid #666;
  @media (min-width: 600px) {
    display: flex ;
    align-items: stretch;
    flex-direction: row;
  }
  }
  
   .basket-container div {
    padding: 10px; 
  }
  .basket-img {
    flex:3;
      img {
        width: 100px;
      }  
  }

  .basket-name {
    align-self: center;
    flex:5; 
  }
   .basket-price {
    align-self: center;
    flex:3;  
  }

  .basket-count {
    align-self: center;
    flex:1; 
  }

  .delete-cart {
    align-self: center;
    flex:2;
      img {
        float: right;
      }  
  }

  .total-user-checkout {
    float: right;
  }

   .main-basket-container div{
    color: #fff;
    font-weight: bold;
  }

  .error{
    color: red;
    font-weight: bold;
  }

  .categories{
    color: #41addd;
        &:active {
          color: #fff;
        }
  }


`;
