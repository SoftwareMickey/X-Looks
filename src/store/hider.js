import { createSlice } from "@reduxjs/toolkit";


const HiderSlicer = createSlice({
    name:'slicer',
    initialState: {hider: 'hidden'},
    reducers: {
        removeHiderHandler: (state, action) => {
            if(state.hider === 'hidden'){
                state.hider = '';
            }
            else if(state.hider === ''){
                state.hider = 'hidden';
            }
        }
    }
})

export default HiderSlicer