import React from 'react'
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems'
import Banner from '../Banner/Banner'
import CategoryName from '../CategoryName/CategoryName'
// import Header from '../Header/Header'

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <AdvertisedItems></AdvertisedItems>
       <CategoryName></CategoryName>
    </div>
  )
}

export default Home