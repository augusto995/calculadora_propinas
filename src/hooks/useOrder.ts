import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){

    //Se usa con types mas complejos que typescript no infiere bien
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {

        const newItem : OrderItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }

    return{
        addItem
    }
}
