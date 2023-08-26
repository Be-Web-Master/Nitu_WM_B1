let table = document.querySelector("table");
let thead = document.querySelector("#thead");
let tbody = document.querySelector("#tbody");
let addColumn = document.querySelector("#addColumn");
let addRow = document.querySelector("#addRow");
let clear = document.querySelector("#clearbtn");

tbody.addEventListener("keyup", (event) => {
  console.log(event.target);
});
thead.addEventListener("keyup", (event) => {
  console.log(event.target);
});


// const header ={
//     elementType:'',
//     columnNumber:'',
//     columnNumber:0,
//     sort:''
// }
// const tr ={
//     elementType:'',
//     rowNumber:0,
//     columnDetails:[{
//       elementType:'',
//       columnNumber:'',
//       rowNumber:0,
//       cellvalue:''
//     }]
// }

// function clearUI(){
//     thead.innerHTML=""
//     tbody.innerHTML=""
// }
const LOCAL_STORAGE_TABLE_KEY = "tableStateData";
tablestate = {
  header: [],
  body: [],
};

if (localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
  tablestate = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
} else {
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tablestate));
}

const updateTableData = (tablestate) => {
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tablestate));
  createTableUI(tablestate);
};

function addNewColumn(columnData) {
  //   console.log({ columnData });
  tablestate.header.push(columnData);
  tablestate.body.forEach((rowObject) => {
    rowObject.cellDetails.push({
      elementType: "td",
      columnNumber: "",
      rowNumber: 0,
      cellvalue: "row",
    });
  });
  createTableUI(tablestate);
  updateTableData(tablestate);
}
addColumn.addEventListener("click", () =>
  addNewColumn({
    elementType: "th",
    columnNumber: "Column A",
    columnNumber: tablestate.header.length + 1,
    sort: undefined,
  })
);

function addNewRow(rowData) {
  tablestate.body.push(rowData);
  tablestate.header.forEach((headerObject) => {
    rowData.cellDetails.push({
      elementType: "td",
      columnNumber: headerObject.columnNumber+1,
      rowNumber: 0,
      cellvalue: "row",
    });
  });
  createTableUI(tablestate);
  updateTableData(tablestate);
}
addRow.addEventListener("click", () =>
  addNewRow({
    elementType: "tr",
    rowNumber: tablestate.body.length + 1,
    cellDetails: [],
  })
);

function createTableUI(tablestate) {
//   console.log(tablestate)
  const Header = tablestate.header;
  const Body = tablestate.body;
  thead.innerHTML = "";
  tbody.innerHTML = "";

  const createInputElement = (cellType, value, id,idx) => {
    const elementType = cellType === "headcell" ? "input" : "textarea";
    const InputElement = document.createElement(elementType);
    InputElement.value;
    if (cellType === "headcell") {
      InputElement.setAttribute("placeholder", "column Name");
      InputElement.setAttribute(`id`,`${idx}`);
    } else if (cellType === "bodycell") {
      InputElement.setAttribute("placeholder", "row Name");
      InputElement.setAttribute(`id`,`${idx}`);
    }
    InputElement.setAttribute("type", "text");

    return InputElement;
  };
  for (let i = 0; i < Header.length; i++) {
    const createTh = document.createElement(Header[i].elementType);
    // const columnNumber = Header[i].columnNumber;
    const InputElem = createInputElement(`headcell`,`0-${i}`);
    createTh.append(InputElem);
    thead.append(createTh);
  }
  Body.forEach((tableRow) => {
    const { elementType, cellDetails } = tableRow;
    const tr = document.createElement(elementType);
    cellDetails.forEach((cellElement) => {
      const tdElem = document.createElement(cellElement.elementType);
      const InputElem = createInputElement("bodycell", cellElement.cellvalue);
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
