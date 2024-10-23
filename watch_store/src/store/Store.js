import {configureStore} from '@reduxjs/toolkit'
import Carts1 from './cartslice/Cartslice'

export const store = configureStore({
    reducer:{
        cart:Carts1
    },
    devTools:true
})
