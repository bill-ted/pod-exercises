"use strict";

const makeCar = (make,model) => {
    return {
        make: make,
        model: model
    }
};
console.log(makeCar('ford','model-T'));
let salesReport = {
    title: 'Monthly Sales Report',
    Date: '3-17-2015',
    Office: 'Codeup',
    Employees: [
        {
            number: 1,
            firstName: 'Jane',
            lastName: 'Janeway',
            sales: 3
        },
        {
            number: 3,
            firstName: 'Tricia',
            lastName: 'Triciason',
            sales: 5
        },
        {
            number: 4,
            firstName: 'Jeannette',
            lastName: 'Jeanson',
            sales: 4
        },
        {
            number: 5,
            firstName: 'Charles Emmerson III',
            lastName: 'Winchester',
            sales: 2
        },
        {
            number: 6,
            firstName: 'Chet',
            lastName: 'Chedderson',
            sales: 8
        },
        {
            number: 7,
            firstName: 'Chaiam',
            lastName: 'Chaiamson',
            sales: 12
        },
        {
            number: 8,
            firstName: 'Dale',
            lastName: 'Dalesinger',
            sales: 1
        },
        {
            number: 9,
            firstName: 'Zig',
            lastName: 'Ziglar',
            sales: 50
        },
        {
            number: 10,
            firstName: 'Henry',
            lastName: 'Kissinger',
            sales: 1
        },
        {
            number: 11,
            firstName: 'Arthur Herbert',
            lastName: 'Fonzarelli',
            sales: 23
        },
        {
            number: 12,
            firstName: 'Betty',
            lastName: 'Boop',
            sales: 67
        }

    ]

};

const getEmployeeCount = () => salesReport.Employees.length;
console.log(getEmployeeCount());

const getTotalNumberOfSales = salesReport.Employees.reduce((totalSales, employee) => {
    return totalSales + employee.sales
}, 0);
console.log(getTotalNumberOfSales);

console.log(getTotalNumberOfSales/11);
