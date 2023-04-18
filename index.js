let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((employee)=>{
        if(employee.profession==='developer')
        {
            console.log(employee); 
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee)=>{
        if(employee.profession==='profession'){
            console.log(employee);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmp=    {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newEmp);
    console.log(newEmp);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
        let admin;
        const other=arr.filter((employee)=>{
            if(employee.profession==='admin'){
                admin=employee;
                return false;
            }
            return true;
        })
        console.log(other);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 10, name: "mus", age: "18", profession: "ops" },
        { id: 20, name: "jay", age: "58", profession: "ops" },
        { id: 30, name: "karqn", age: "45", profession: "manager" },
      ];
    const concaArr=[];
    arr.forEach((emp)=>{
        concaArr.push(emp);
    })
    
    newArr.forEach((emp)=>{
        concaArr.push(emp);
    })
    console.log(concaArr);
}