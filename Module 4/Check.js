function validateANDadd() {
    var theNewWord = document.forms["myForm"]["newWord"].value;
    var theNewNumber = document.forms["myForm"]["newNumber"].value;
    if (theNewWord == "") {
      alert("Please enter a word to check");
      return false;
    }
    else if ((theNewNumber != 1) && (theNewNumber != 2)) {
      alert("Please enter a 1 or 2 for the list.");
      document.forms["myForm"]["newNumber"].value = "";
      return false;
    }
    else {
        if (theNewNumber==1){
           var tableRef = document.getElementById("myList1");
           (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;}
        else{
           var tableRef = document.getElementById("myList2");
           (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;}
        document.forms["myForm"]["newWord"].value = "";
        document.forms["myForm"]["newNumber"].value = "";
        return true;
    }
  }

  function clearList1() {
    var tableRef = document.getElementById("myList1");
    tableRef.innerHTML = " ";
  }

  function clearList2() {
    var tableRef = document.getElementById("myList2");
    tableRef.innerHTML = " ";
  }