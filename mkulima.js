class Mkulima {
    constructor(farms, products, vendors) {
        this.farms = farms;
        this.products = products;
        this.vendor = vendors;

    }
    addFarm(farmId, name, farmer, phone, address) {
        let farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address,

        }
        return this.farms.push(farm);
    }


    getFarm(farmId) {
        for (var i = 0; i < this.farms.length; i++) {
            let farm = this.farms[i];
            if (farm.farmId === farmId); {
                return farm;
            }
        }
    }
    removeFarm(farmId) {
        let farm = this.getFarm(farmId);
        let index = this.farms.indexOf(farmId);
        return this.farms.splice(index, 1);
    }
    updateFarm(farmId, name, farmer, phone, address) {
        let newFarm = this.farms.find(newFarm => newFarm.farmer == "Beth");
        newFarm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address,
        }
        return newFarm
    }

    addProduct(productId, name, price) {
        let product = {
            productId: productId,
            name: name,
            price: price,
        }
        return this.products.push(product);
    }
    getProduct(productId) {
        for (var i = 0; i < this.products.length; i++) {
            let product = this.products[i];
            if (product.productId === productId); {
                return product;
            }
        }

    }
    removeProduct(productId) {
        let product = this.getProduct(productId);
        let index = this.products.indexOf(productId);
        return this.products.splice(index, 1);
    }
    updateProduct(productId, name, price) {
        let newProduct = this.products.find(newProduct => newProduct.name == "Soghurm");
        newProduct = {
            ProductId: productId,
            name: name,
            price: price,
        }
        return newProduct

    }

    printProducts() {
        for (let object of this.products) {
            console.log([object.name + "," + object.price])
        }
    }
    calculateOrderCost(productId, quantity) {
        let cost = this.products.find(cost => cost.productId == productId)
        return cost.price * quantity

    }

}
let order1 = new Mkulima([{
    farmId: "220",
    farmName: "Dalamere",
    farmer: "John",
    phone: "0733545998",
    address: "30342 kenya"
}], [{
    productId: "3267",
    name: "rice",
    price: 5000
}]);
console.log(order1.addFarm("220", " Kinangop", " Ochieng", " 0713664422", "Nyandarua"));
console.log(order1.getFarm("220"));
console.log(order1.removeFarm("220"));
console.log(order1.updateFarm("4335", "kilimo farm", "Caroline", "0745339034", "Jambini"));
console.log(order1.addProduct("630", "soghurm", 9876));
console.log(order1.getProduct("630"));
console.log(order1.removeProduct("630"));
console.log(order1.updateProduct("7933", "potatoes", 56790));
console.log(order1.printProducts());
console.log(order1.calculateOrderCost("6783", ))





 


