import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import CategroyWiseProductDisplay from '../components/CategoryWiseProductDisplay'


const Home = () => {
  return (
    <div className='scrollbar-none'>
      <CategoryList/>
      <BannerProduct/>

      {/*  */}
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      {/*  */}
      <CategroyWiseProductDisplay category={"airpodes"} heading={"Top's Airpodes"}/>
      <CategroyWiseProductDisplay category={"camera"} heading={"Camera & Photography"}/>
      <CategroyWiseProductDisplay category={"Mouse"} heading={"Mouse"}/>
      <CategroyWiseProductDisplay category={"earphones"} heading={"Wired Earphones And HeadPhones"}/>
      <CategroyWiseProductDisplay category={"refrigerator"} heading={" Heavy Discount"}/>
      <CategroyWiseProductDisplay category={"watches"} heading={"Popular's Watches"}/>
      <CategroyWiseProductDisplay category={"mobiles"} heading={"Speacial Offer"}/>
      <CategroyWiseProductDisplay category={"televisions"} heading={"Diwali Offers"}/>
      <CategroyWiseProductDisplay category={"speakers"} heading={"Barnded Bluetooth Speakers"}/>
      <CategroyWiseProductDisplay category={"trimmers"} heading={"Latest Trimmers"}/>

      {/*  */}
      <VerticalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <VerticalCardProduct  category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct  category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct  category={"earphones"} heading={"Wired Earphones And HeadPhones"}/>
      <VerticalCardProduct  category={"refrigerator"} heading={" Heavy Discount"}/>
      <VerticalCardProduct  category={"watches"} heading={"Popular's Watches"}/>
      <VerticalCardProduct  category={"mobiles"} heading={"Speacial Offer"}/>
      <VerticalCardProduct  category={"televisions"} heading={"Diwali Offers"}/>
      <VerticalCardProduct  category={"speakers"} heading={"Barnded Bluetooth Speakers"}/>
      <VerticalCardProduct  category={"trimmers"} heading={"Latest Trimmers"}/>

      {/*  */}
      <HorizontalCardProduct  category={"camera"} heading={"Camera & Photography"}/>
      <HorizontalCardProduct  category={"Mouse"} heading={"Mouse"}/>
      <HorizontalCardProduct  category={"earphones"} heading={"Wired Earphones And HeadPhones"}/>
      <HorizontalCardProduct  category={"refrigerator"} heading={" Heavy Discount"}/>
      <HorizontalCardProduct  category={"mobiles"} heading={"Speacial Offer"}/>
      <HorizontalCardProduct  category={"televisions"} heading={"Diwali Offers"}/>
      <HorizontalCardProduct  category={"speakers"} heading={"Barnded Bluetooth Speakers"}/>
      <HorizontalCardProduct category={"trimmers"} heading={"Latest Trimmers"}/>
    </div>
  )
}

export default Home