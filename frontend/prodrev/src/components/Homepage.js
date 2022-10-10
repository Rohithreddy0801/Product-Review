import React from 'react'
import {useLocation} from 'react-router-dom';
import Product from './Product'
import '../Homepage.css'

function Homepage() {
  const item1 = {
    name:"Asus Rog 6",
    image:"https://fdn.gsmarena.com/imgroot/news/20/05/asus-phones-in-july/-727w2/gsmarena_000.jpg",
    itemId:"01"
  };
  const item2 = {
    name:"Havells Fan",
    image:"https://images.moneycontrol.com/static-mcnews/2021/03/Havells_fan.jpg?impolicy=website&width=1600&height=900",
    itemId:"02"
  };
  const item3 = {
    name:"LLOYD AC",
    image:"https://www.mylloyd.com/media/products/GLS12I32WSEL-zoom2.jpg",
    itemId:"03"
  };
  const item4 = {
    name:"Xmate mouse",
    image:"https://m.media-amazon.com/images/S/aplus-media/vc/368f53c2-716c-43b5-877b-01e03734c3b9.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    itemId:"04"
  };
  const item5 = {
    name:"All out",
    image:"https://m.media-amazon.com/images/I/51iLWZ7U8yL._SL1500_.jpg",
    itemId:"05"
  };
  const item6 = {
    name:"PlayStation 5",
    image:"https://assets.reedpopcdn.com/ps5-pre-order-header.jpg/BROK/thumbnail/1600x900/quality/100/ps5-pre-order-header.jpg",
    itemId:"06"
  };

  const location = useLocation();
  var user = location.state;
  if(location.state!=null){
    user = user.user
  }
  return (
    <div className='products'>
        <ul className='product-list'>
            <li><Product props={{"item":item1,"user":user}}/></li>
            <li><Product props={{"item":item2,"user":user}}/></li>
            <li><Product props={{"item":item3,"user":user}}/></li>
            <li><Product props={{"item":item4,"user":user}}/></li>
            <li><Product props={{"item":item5,"user":user}}/></li>
            <li><Product props={{"item":item6,"user":user}}/></li>
        </ul>
    </div>
  )
}

export default Homepage