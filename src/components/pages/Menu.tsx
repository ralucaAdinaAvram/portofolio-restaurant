import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../CartItem";

const Menu = () => {

  useEffect(() => {
    getContacts();
  }, []);


  const [contacts, setContacts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean | any>(false);
  const [flag, setFlag] = useState<boolean>(false)

  


  const getContacts = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(res)
      setContacts(res.data.categories);
      setLoading(true);
      setFlag(true)
    } catch (err) {
      alert(err.message);
    }
  };
  console.log("hello", contacts);

  let priceArr = ['Price: £9.50','Price: £3.25','Price: £6.00','Price: £5.50','Price: £1.25',
  'Price: £8.00','Price: £6.50','Price: £7.00','Price: £8.00','Price: £12.00','Price: £9.00','Price: £28.00','Price: £8.00','Price: £10.00']

  useEffect(() => {
    if(flag){
      let arr = [...contacts]
      arr = arr.map((item,index) => {
        return {...item, price: priceArr[index]}
      })
      setContacts(arr)

      setFlag(false)
    }
  }, [flag])


  return (
    <div className="fragment">
      {/* {
        loading? 
        <div>...loading</div>
        :
        <div>loaded</div>
      } */}
      <div id = 'itemContainer' className="row">
        {contacts?.length > 0 &&
          contacts?.map((contact) => (
            <div key = {contact.idCategory} >
              <CartItem path = {contact.strCategoryThumb} label = {contact.strCategory} text = {contact.strCategoryDescription} contact = {contact}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
