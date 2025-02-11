import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder(){

    //Se usa con types mas complejos que typescript no infiere bien
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = () => {
        console.log('Agregando')
    }

    return{
        addItem
    }
}
