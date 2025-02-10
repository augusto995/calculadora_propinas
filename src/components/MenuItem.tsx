import type { MenuItem } from "../types"

//Instalar: ES7+React/Redux/React-Native snippets. Simple react snippet Video 111. Minuto 0:45
type MenuItemProps = {
  item: MenuItem
}

export default function MenuItem({item} : MenuItemProps) {
  return (
    <button
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
