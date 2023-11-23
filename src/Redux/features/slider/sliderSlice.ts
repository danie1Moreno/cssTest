import { createSlice } from "@reduxjs/toolkit"

interface initialProps {
    id:number,
    index:number,
    name:string,
    op:boolean

};

const initialState: initialProps ={
    id:1,
    index:1,
    name:"string",
    op:false
}
export const sliderSlice=createSlice({
    name:"/rxSlice",
    initialState,
    reducers:{
        selectCard:(state,action)=>{
            return {...state}
        },
    }
})

export const {selectCard} = sliderSlice.actions
export default sliderSlice.reducer