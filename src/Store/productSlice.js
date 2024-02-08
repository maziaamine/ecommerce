import { createSlice } from '@reduxjs/toolkit';
import { all_product } from '../Assets/all_product';

const initialState = {
    Products: all_product,prostore:[] ,total:0
};

const productSlice = createSlice({
    name: 'product',
    initialState: initialState, 
    reducers: {
        add(state, action) {
            const obj = action.payload;
            const existingProduct = state.prostore.find((p) => p.id === obj.id);
      
            if (existingProduct) {
              existingProduct.qte++;
            } else {
              state.prostore.push({ id:obj.id,image:obj.image,name:obj.name,price:obj.price, qte: 1,taille:obj.taille });
            }
            state.total = state.prostore.reduce((acc, product) => acc + product.price * product.qte, 0);
          },
          Desincrement(state, action) {
            const obj = action.payload;
            const p = state.prostore.find((p) => p.id === obj.id)
            if (p) {
              p.qte--;
            } 
            if(p.qte === 0){
              state.prostore.splice(state.prostore.indexOf(p),1)
            }
            state.total = state.prostore.reduce((acc, product) => acc + product.price * product.qte, 0);
          },
          remove(state,action){
            state.prostore= []
          state.total = 0  },
          Delete(state,action){
            state.prostore = state.prostore.filter((p)=>p.id !== action.payload.id)
            state.total = state.prostore.reduce((acc, product) => acc + product.price * product.qte, 0);
          }
    }
});
export const {add,Desincrement,remove,Delete} = productSlice.actions

export { productSlice };
