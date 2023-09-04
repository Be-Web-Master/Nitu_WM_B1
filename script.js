let table = document.querySelector("table");
let thead = document.querySelector("#thead");
let tbody = document.querySelector("#tbody");
let addColumn = document.querySelector("#addColumn");
let addRow = document.querySelector("#addRow");
let clear = document.querySelector("#clearbtn");
let sortform = document.querySelector("#sort-form");
let sortingDropdown = document.querySelector('.column-dropdown')
 
const LOCAL_STORAGE_TABLE_KEY = "tableStateData";
let  tablestate = {
  header: [],
  body: [],
};

if (localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
    tablestate = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
  } else {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tablestate));
  }


function CreateSortingFormElment() {
   
    
    tablestate.header.forEach(columnHeader =>{
        const optionElement = document.createElement('option')
        optionElement.setAttribute('value',columnHeader.columnName)
        optionElement.innerText = columnHeader.columnName
        sortingDropdown.append(optionElement)
    })
}
 CreateSortingFormElment() 


 sortform.addEventListener('submit',(event) => {             
    event.preventDefault()
   console.log({
   columnName:event.target.columnsdropdown.value,
   sortOrder:event.target.sort.value

   })
  const sortOrder=event.target.sort.value
   const columnName=event.target.columnsdropdown.value
   const columnNumber = tablestate.header.find(headerObj => headerObj.columnName === columnName).columnNumber
   console.log(columnNumber)
   if(sortOrder=="Acending"){
    tablestate.body.sort((obj1, obj2) =>{
        if(obj1.cellDetails[columnNumber].cellvalue > obj2.cellDetails[columnNumber].cellvalue)
        return 1;
        else return -1
       })
   }else {
    tablestate.body.sort((obj1, obj2) =>{
        if(obj1.cellDetails[columnNumber].cellvalue > obj2.cellDetails[columnNumber].cellvalue)
        return -1;
        else return 1
       })
   }
   updateTableData(tablestate)
 })

 






tbody.addEventListener("keyup", (event) => {
  console.log(tablestate);
 const [columnIndex ,rowIndex] = event.target.id.split("-")
tablestate.body[rowIndex].cellDetails[columnIndex].cellvalue=event.target.value
 localStorage.setItem(LOCAL_STORAGE_TABLE_KEY,JSON.stringify(tablestate))

});

thead.addEventListener("keyup", (event) => {
  console.log(event.target);
  const [columnIndex] = event.target.id.split("-")[1]
  tablestate.header[columnIndex].columnName= event.target.value

localStorage.setItem(LOCAL_STORAGE_TABLE_KEY,JSON.stringify(tablestate))
});




const updateTableData = (tablestate) => {
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tablestate));
  createTableUI(tablestate);
};


function addNewColumn(columnData) {
  //   console.log({ columnData });
  tablestate.header.push(columnData);
  tablestate.body.forEach((rowObject,idx) => {
    rowObject.cellDetails.push({
      elementType: "td",
      columnNumber: columnData.columnNumber,
      rowNumber: idx,
      cellvalue: " ",  
    });
  });
  createTableUI(tablestate);
  updateTableData(tablestate);
}
addColumn.addEventListener("click", () =>
  addNewColumn({
    elementType: "th",
    columnNumber: tablestate.header.length,
    sort: undefined,
    columnName:"",
  })
);


function addNewRow(rowData) {
  tablestate.body.push(rowData);
  tablestate.header.forEach((headerObject) => {
    rowData.cellDetails.push({
      elementType: "td",
      columnNumber: headerObject.columnNumber, 
      rowNumber: rowData.rowNumber,
      cellvalue: " ",
    });
  });
  createTableUI(tablestate);
  updateTableData(tablestate);
}
addRow.addEventListener("click", () =>
  addNewRow({
    elementType: "tr",
    rowNumber: tablestate.body.length, // passing body array length as rowNumber
    cellDetails: [],
  })
);


function createTableUI(tablestate) {
  console.log({tablestate})
  const Header = tablestate.header;
  const Body = tablestate.body;
  thead.innerHTML = "";
  tbody.innerHTML = "";

  const createInputElement = (cellType,idx,cellElement) => {
    const elementType = cellType === "headcell" ? "input" : "textarea";
    const InputElement = document.createElement(elementType);
    

    if (cellType === "headcell") {
        InputElement.value = cellElement.columnName     
      InputElement.setAttribute("placeholder", "column Name");
      
      InputElement.setAttribute(`id`,`${idx}`);
    } else if (cellType === "bodycell") {
        InputElement.value = cellElement.cellvalue
      InputElement.setAttribute("placeholder", "row Name");
      InputElement.setAttribute(`id`,`${idx}`);
    }
    InputElement.setAttribute("type", "text");

    return InputElement;
  };
  for (let i = 0; i < Header.length; i++) {
    const createTh = document.createElement(Header[i].elementType);
    // const columnNumber = Header[i].columnNumber;
    const InputElem = createInputElement(`headcell`,`0-${i}`, Header[i]);
    createTh.append(InputElem);
    thead.append(createTh);
  }
  Body.forEach((tableRow) => {
    const { elementType, cellDetails, rowNumber } = tableRow;
    const tr = document.createElement(elementType);
    cellDetails.forEach((cellElement, idx) => {
      const tdElem = document.createElement(cellElement.elementType);
      const InputElem = createInputElement("bodycell", `${cellElement.columnNumber}-${rowNumber}`,cellElement);
      tdElem.append(InputElem);
      tr.append(tdElem);
    });
    tbody.append(tr);
  });
}
createTableUI(tablestate);


function local() {
  localStorage.clear();
}
