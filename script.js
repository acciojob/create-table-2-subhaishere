function createTable() {
    //Write your code here
	let table=document.getElementById("myTable");
	let rows=prompt("Input number of rows");
	let columns=prompt("Input number of columns");
	for(let i=0;i<rows;i++){
		let row = table.insertRow()
		for(let j=0;j<columns;j++){
			let column = row.insertCell();
			column.innerText=`Row-${i} Column-${j}`
		}
	}
}