import React from 'react';


// Custom hook
function useLocalStorage(itemName, initialValue) {
    // Funcion LocalStorage
    const localStorageItem = localStorage.getItem(itemName);
    let parseItem;
    
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parseItem = initialValue;
    }else{
      parseItem = JSON.parse(localStorageItem);
    
    }
    // Funcion para traer la informacion de las nuevas task
    const [item, setItem] = React.useState(parseItem);
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }
  
    return [
      item,
      saveItem,
    ];
}

export { useLocalStorage }