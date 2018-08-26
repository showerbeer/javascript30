const pretty = (a) => JSON.stringify(a, null, 4)
const data = ['car', 'car', 'pogostick', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
document.addEventListener('DOMContentLoaded', function (event) {
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    var c1 = document.querySelector('pre.task1');
    var a1 = inventors.filter(x => x.year >= 1500 && x.year < 1600);
    c1.innerHTML = pretty(a1);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    var c2 = document.querySelector('pre.task2');
    var a2 = inventors.map(x => `${x.first} ${x.last}`);
    c2.innerHTML = pretty(a2);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    var c3 = document.querySelector('pre.task3');
    var a3 = inventors.sort((x, y) => x.year - y.year);
    c3.innerHTML = pretty(a3);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    var c4 = document.querySelector('pre.task4');
    var a4 = inventors.reduce((acc, val) =>  acc + (val.passed - val.year), 0);
    c4.innerHTML = a4;

    // 5. Sort the inventors by years lived
    var c5 = document.querySelector('pre.task5');
    var a5 = inventors.sort((x,y) => (x.passed - x.year) - (y.passed - y.year));
    c5.innerHTML = pretty(a5);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    var c6 = document.querySelector('pre.task6');
    c6.innerHTML = "Array.from(document.querySelectorAll('.mw-category a')).map(x => x.text).filter(a => a.indexOf('de') > 0)";
    
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    var c7 = document.querySelector('pre.task7');
    var a7 = people.sort((p1,p2) => p1.split(',')[0] < p2.split(',')[0] ? -1 : 1);
    c7.innerHTML = pretty(a7);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    var c8 = document.querySelector('pre.task8');
    var a8 = data.reduce((acc,cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
    }, {});
    c8.innerHTML = pretty(a8);
});