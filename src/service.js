import axios from 'axios';


axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log("error")
});
axios.defaults.baseURL = "https://localhost:7190/";
export default {
  getTasks: async () => {
    const result = await axios.get(`items`)    
    return result.data;
  },

  addTask: async(itemName)=>{
   
    const result = await axios.post(`items`,{name:itemName,isComplete:false})    
    return result.data;    
  },

  setCompleted: async (id, isComplete) => {
    await axios.put(`items/${id}/${isComplete}`)
  },
  deleteTask:async(id)=>{
    const result = await axios.delete(`items/${id}`)    
    return result.data;
  }
};

