// Write your solution in this file!
const employee = {
    name: "Pablo",
    streetAddress: "35 WaterGarde"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,[key]:value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    return {...delete employee.key};
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}