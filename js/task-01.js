const categoriesArray = Array.from(
    document.querySelectorAll('#categories li.item')  //фильтр для поиска элеменов, возвращает nall мли пустой масив//
);

console.log(`В списке ${categoriesArray.length} категории.`);

categoriesArray.forEach((elem) => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`)
    console.log(`Количество елементов: ${elem.querySelectorAll('li').length} `)
} );