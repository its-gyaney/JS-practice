const costumer = [
    {custId: 1, name:"riyana",
    bought: [
            {id:1,name:"shoes"},
            {id:2, name: "copy"}
        ],
    },
    {
        custId: 2,
        name: "nirjal",
        bought: [
            {id:3, name: "bottle"},
            {id:4, name: "copy"},
        ],
    },
    {
        custId: 3,
        name: "ashish",
        bought: [
            {id: 5, name: "wiskey"},
            {id: 6, name: "hairClip"},
        ],
    },
    {
        custId: 4,
        name: "ashok",
        bought: [
            {id: 5, name: "daru"},
            {id: 6, name: "sikhar Ice"},
        ],
    },
];

const customerResponse = {
    status: 200,
    message: "customer fetched sussefully",
    data: costumer,
};
const getProductsName = () => {
    let boughtItem = []
    if(customerResponse.status === 200){
        customerResponse.data.forEach((customer) => {
            customer.bought.map((item) => {
                boughtItem.unshift(item.name)
            });
        });
        return boughtItem;
    }
};
console.log(getProductsName());


const getProductNumber = () => {
    if (customerResponse.status === 2000) {
        let productNumbers = {};
        customerResponse.data.forEach((customer) => {
            customer.bought.map((item) => {
                {
                    if (productNumbers[item.id]){
                        productNumbers[item.id] += 1;
                    }else{
                        productNumbers[item.id] = 1;
                    }
                }
            });
        });
        return productNumbers
    }
};
console.log(getProductNumber);