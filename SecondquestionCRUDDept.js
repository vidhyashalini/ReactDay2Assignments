import React, { useState } from "react";

function DeptList() {
  const [deptsArray, setDeptsArray] = useState([]);
  const [deptno, setDeptno] = useState("");
  const [dname, setDname] = useState("");
  const [loc, setLoc] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);

  function getDeptsButton_click() {
    let tempArray = [
      { deptno: 10, dname: "Accounts", loc: "Hyd" },
      { deptno: 20, dname: "Sales", loc: "Pune" },
      { deptno: 30, dname: "Marketing", loc: "Hyd" },
      { deptno: 40, dname: "Operations", loc: "Chennai" },
    ];

    setDeptsArray(tempArray);
  }

  function addDeptButton_click() {
    let tempArray = [...deptsArray];

    if (isUpdate && updateIndex !== null) {
      // Update existing record
      tempArray[updateIndex] = { deptno, dname, loc };
      setIsUpdate(false);
      setUpdateIndex(null);
    } else {
      // Add new record
      let deptObj = { deptno, dname, loc };
      tempArray.push(deptObj);
    }

    setDeptsArray(tempArray);
    setDeptno("");
    setDname("");
    setLoc("");
  }

  function deleteDept_click(dno) {
    let tempArray = deptsArray.filter((item) => item.deptno !== dno);
    setDeptsArray(tempArray);
  }

  function updateDept_click(dno, index) {
    const deptToUpdate = deptsArray.find((item) => item.deptno === dno);
    setDeptno(deptToUpdate.deptno);
    setDname(deptToUpdate.dname);
    setLoc(deptToUpdate.loc);
    setIsUpdate(true);
    setUpdateIndex(index);
  }

  let resultArray2 = deptsArray.map((item, index) => (
    <tr key={index}>
      <td>{item.deptno}</td>
      <td>{item.dname}</td>
      <td>{item.loc}</td>
      <td>
        <a
          href="javascript:void(0);"
          onClick={() => deleteDept_click(item.deptno)}
        >
          Delete
        </a>
        {" | "}
        <a
          href="javascript:void(0);"
          onClick={() => updateDept_click(item.deptno, index)}
        >
          Update
        </a>
      </td>
    </tr>
  ));

  return (
    <>
      <h3>Working with State -- CRUD Operations on Array of Objects</h3>
      <hr />

      <input
        type="text"
        placeholder="Dept Number"
        value={deptno}
        onChange={(e) => setDeptno(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dept Name"
        value={dname}
        onChange={(e) => setDname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dept Location"
        value={loc}
        onChange={(e) => setLoc(e.target.value)}
      />
      <hr />
      <input type="button" onClick={getDeptsButton_click} value="Get Depts" />
      <input
        type="button"
        onClick={addDeptButton_click}
        value={isUpdate ? "Update Dept" : "Add Dept"}
      />
      <hr />

      <table border="2" width="400" cellSpacing="0" cellPadding="5">
        <thead>
          <tr>
            <th>Dept Number</th>
            <th>Dept Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{resultArray2}</tbody>
      </table>
    </>
  );
}

export default DeptList;