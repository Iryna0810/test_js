function logItems(items) {
    // for (let i = 0; i < items.length; i += 1){
    //     console.log(`${i + 1} - ${items[i]}`);
    // }
    console.log(items);
    items.forEach((element, index, array) => {
        // console.log(element, index);   
        
        console.log(`${index + 1} - ${element}`)
    });


}

logItems(['Mango', 'Poly', 'Ajax']);

const printContactInfo = ({ names, phones }) => {
    const namesArray = names.split(',');
    const phonesArray = phones.split(',');
    // for (let i = 0; i < namesArray.length; i += 1){
    // console.log(`${namesArray[i]}: ${phonesArray[i]}`)
    // }
    namesArray.forEach((name, i) => {
        console.log(`${name} - ${phonesArray[i]}`);      
    }
)
}

printContactInfo(
    {
        names: 'Iryna, Volodymyr, Danylo, Andrii',
        phones: '0989001010,0975001060,0504617892,0982461254',
    }
);


const calculateAverage = (...args) => {
    let total = 0;
    // for (let numder of args) {
    //     total += numder;
    // }
    args.forEach((number) => {
        total += number;
    })
    return total / args.length;
};
console.log(calculateAverage(1, 2, 3, 4, 5));


const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const allCourses = students.flatMap(student => student.courses);

const unuqueCourses = allCourses.filter(
    (course, index, array) => array.indexOf(course) === index
);
console.log(unuqueCourses);