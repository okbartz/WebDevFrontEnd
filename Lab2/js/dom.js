let currentNode;
let currentNode2
 currentNode2 = document.getElementById("paragraph1")

function addNewParagraph() {
  
  nodeList = document.getElementsByTagName("p");
  pNo = nodeList.length;

  input = document.getElementById("textarea1").value;
  const newNode = document.createElement("p");
  newNode.appendChild(document.createTextNode(input))
  newNode.id = "p" + (pNo + 1)
  currentNode2.parentNode.insertBefore(newNode, currentNode2)
  currentNode2 = document.getElementById(newNode.id)

   //to be completed
   
}

function alterCell(){
  currentNode = document.getElementById("table1").rows[0].cells[1];
  const newContent = '<span id="redcell">This <strong>table cell</strong> has been altered</span>';
  currentNode.innerHTML = newContent;

}

function domView() {
  let i;
  let nodeList;
  let nodeList1;
  let nodeList2;
  let output = "";

  //<p> elements
  nodeList = document.getElementsByTagName("p");
  nodeList1 = document.getElementsByTagName("input");
  nodeList2 = document.getElementsByTagName("tr");
  
  output += "Paragraphs(" + nodeList.length + "):" + "<br>"

  for (i = 0; i < nodeList.length; i++) {
    
    if (nodeList[i].id != "") {
      output += nodeList[i].id + "<br>";
   }
    else {
      output += "(no id)" + "<br>";
    }
    
  }

  output += "Inputs(" + nodeList1.length + "):" + "<br>"

  for (i = 0; i < nodeList1.length; i++) {
    
    if (nodeList1[i].id != "") {
      output += nodeList1[i].id + "<br>";
   }
    else {
      output += "(no id)" + "<br>";
    }
    
  }

  output += "Cells(" + nodeList2.length + "):" + "<br>"

  for (i = 0; i < nodeList2.length; i++) {
    
    if (nodeList2[i].id != "") {
      output += nodeList2[i].id + "<br>";
   }
    else {
      output += "(no id)" + "<br>";
    }
    
  }
 

  //to be completed
  
  currentNode = document.getElementById("domview");
  currentNode.innerHTML = output;
  currentNode.style.visibility = "visible";
}

// provide this
function domHide() {
  currentNode = document.getElementById("domview");
  currentNode.style.visibility = "hidden";
}

window.onload = function () {
  document.getElementById("listdom").onclick = domView;
  document.getElementById("hidedom").onclick = domHide;
  document.getElementById("addpara").onclick = addNewParagraph;
  document.getElementById("altercell").onclick = alterCell;
};
