export function getSupperList(){
    const supperList = localStorage.getItem('supperList')
    
    if(supperList){
        return supperList
    }
}

export function saveSupper(){
    console.log('saveSupper')
    // const currentSupperList = getSupperList()
    // console.log(currentSupperList)
}

export function clearSupperList(){

}

export function takeAwaySupper(supperItem){
    console.log(supperItem);
}

export function getShoppingList(){

}

export function saveShoppingItem(){

}

export function clearShoppingList(){

}

export function removeShoppingItem(){

}