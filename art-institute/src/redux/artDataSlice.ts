import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    data:null
}

const artDataSlice = createSlice({
    name:'ArtData',
    initialState,
    reducers:{
        addArtData:(state, action)=>{
            state.data = action.payload
        }
    }
})

export const {addArtData} = artDataSlice.actions
export default artDataSlice.reducer