<template>
  <div>
    <h1>사용자</h1>

    <ul v-for="item in plants">
      <p><img :src="item.url" width="200px" alt=“plant”/></p>  
        <li>이름 : {{item.name}}  </li>
        <li>url : {{item.url}} </li>
    </ul>    
  </div>
</template>



<script>
import axios from 'axios';
import userList from "../assets/data/users.json";

export default {
  name: "UserList",
  computed: {
    plants() { // #1
      return userList.plants.map((items) => { // #2
        // #3 
          let c = new Date(items["created_date"]); 
          let created_date = c.getHours()+"시 "+c.getMinutes()+"분"; 

          items["created_date"] = created_date;
          
        return items;
      })
    },
  },
}
</script>


