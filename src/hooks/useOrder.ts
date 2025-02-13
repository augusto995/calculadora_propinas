import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){

    //Se usa con types mas complejos que typescript no infiere bien
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} :
                orderItem
            )
            setOrder(updatedOrder)
        } else{
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    return{
        order,
        addItem
    }
}
