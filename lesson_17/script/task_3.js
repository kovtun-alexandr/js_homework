"use strict";
// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, 
// кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, 
// фільтрація за назвою товару, фільтрація за назвою фірми
if (confirm('Почати тестування?')) {
    class Companies {
        constructor(name, regNumber) {
            this.name = name;
            this.regNumber = regNumber;
        }
    }
    class Product {
        constructor(name, unit, quantity, company) {
            this.name = name;
            this.unit = unit;
            this.quantity = quantity;
            this.company = company;
        }
    }
    const сompanies = [
        new Companies("Roshen", "R001"),
        new Companies("Nestle", "N002"),
        new Companies("Mondelez", "M003"),
        new Companies("Konti", "K004"),
        new Companies("ABK", "A005"),
    ];
    const names = ['Печиво', 'Цукерки', 'Вафлі', 'Пряники'];
    const products = [];
    for (let i = 1; i <= 50; i++) {
        const unit = 1000;
        const quantity = 10 + Math.floor(Math.random() * 41);
        const company = сompanies[Math.floor(Math.random() * сompanies.length)];
        const name = names[Math.floor(Math.random() * names.length)];
        products.push(new Product(name, unit, quantity, company));
    }
    class Storage {
        constructor(initProductsList = []) {
            this.productList = [...initProductsList];
        }
        /**
         * Add the product to the end of the array
         * @param product product name, package weight, quantity, manufacturer (name, registration number)
         */
        addProduct(product) {
            this.productList.push(product);
        }
        /**
         * we search for matches by product name and company name and group them by increasing number
         * @returns a sorted and grouped arra
         */
        getSorting() {
            return this.productList.reduce((acc, curr) => {
                const found = acc.find(p => p.name === curr.name && p.company.name === curr.company.name);
                if (found) {
                    found.quantity += curr.quantity;
                }
                else {
                    acc.push(new Product(curr.name, curr.unit, curr.quantity, curr.company));
                }
                return acc;
            }, []);
        }
        /**
         *
         * @param productName we give the product name
         * @param companyName we are changing the company name
         * @param weight we transmit the weight of the shipped goods in grams
         * @returns if a product is found, we load the specified quantity and return the product
         */
        shipProduct(productName, companyName, weight) {
            this.productList = this.getSorting();
            const product = this.productList.find((el) => el.name === productName && el.company.name === companyName);
            if (!product) {
                console.log('Товар не знайдено');
                return false;
            }
            if ((product.quantity * product.unit) < weight) {
                console.log('Недостатньо товару на складі');
                return false;
            }
            product.quantity -= (weight / 1000);
            console.log(`Відвантажено ${(weight / 1000)} кг ${product.name} від ${product.company.name}`);
            return product;
        }
        /**
         * output a list of products to the console
         */
        toString() {
            console.log(this.productList);
        }
    }
    document.write(`
        <h2 class="homework__title">Рішення:</h2>
        <div>Відповідь можна побачити у консолі!</div>
        <hr>
    `);
    console.log(products);
    const storage = new Storage(products);
    storage.addProduct(new Product('Вафлі', 1000, 20, new Companies("Nestle", "N002")));
    storage.getSorting();
    storage.shipProduct('Цукерки', 'Nestle', 10000);
    storage.toString();
}
else {
    alert(`Нажаль ви відмовились від теста 😞`);
}
