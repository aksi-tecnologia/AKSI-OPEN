import { useState } from "react"

export function MenuDefault() {
    const [showNotes, setShowNotes] = useState(false)
    const [showCategories, setshowCategories] = useState(false)

    function handleNotes(){
        setshowCategories(false)
        return setShowNotes(true)
    }
    function handleCategories(){
        setShowNotes(false)
        return setshowCategories(true)
    }

    return (
        <div class="flex space-x-4">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a href="#" class={`${showNotes && "bg-slate-500"} rounded-md px-3 py-2 text-sm font-medium text-white hover:text-gray-700 hover:bg-slate-50`}
            onClick={handleNotes}
            >
                Notas
            </a>
            <a href="#" class={`${showCategories && "bg-slate-500"} rounded-md px-3 py-2 text-sm font-medium text-white hover:text-gray-700 hover:bg-slate-50`}
            onClick={handleCategories}
            >Categorias
            </a>
        </div>
    )
}

export function MenuMobile() {
    return (
        <div class="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Notas</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Categorias</a>

        </div>
    )
}

export function MenuProfile() {
    return (
        <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            {/* Active: "bg-gray-100", Not Active: "" */}
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Seu perfil</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Configurações</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sair</a>
        </div>
    )
}