import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchNews = createAsyncThunk("fetchNews", async() => {

  let data

  try{

  const response =  await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`);

     const result =  await response.json();

               data = result;
         
      
               localStorage.setItem("news",JSON.stringify(result));
               
               return data;

           }catch(e){


              let collection = localStorage.getItem('news')
            
                data = (JSON.parse(collection))  

                
              return data

          }

     
 
    // return result;

}); 

const newsSlicee = createSlice({
    name: "user",
   initialState: {
    loading: true,
    news:[],
    error: "",
    
    },

  extraReducers(builder){
    //fetchNews
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.error =" ";
      
    });

    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
      
    });
  },
});




export default newsSlicee.reducer;