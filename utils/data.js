import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'Sabbir',
            email:'sabbir@gmail.com',
            password: bcrypt.hashSync ('123456'),
            isAdmin: true,
        },
        {
            name:'Ahmed',
            email:'ahmed@gmail.com',
            password: bcrypt.hashSync ('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'CK',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',

        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 70,
            brand: 'CK',
            rating: 4.5,
            numReviews: 40,
            countInStock: 10,
            description: 'A popular shirt',

        },
        {
            name: 'Full Shirt',
            slug: 'full-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 120,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 19,
            countInStock: 40,
            description: 'A popular shirt',

        },
        {
            name: 'Golf Pants',
            slug: 'golf-pants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 5,
            numReviews: 70,
            countInStock: 30,
            description: 'A popular pants',

        },
        {
            name: 'Half Pants',
            slug: 'half-pants',
            category: 'Shirts',
            image: '/images/pants2.jpg',
            price: 50,
            brand: 'CK',
            rating: 4.5,
            numReviews: 30,
            countInStock: 30,
            description: 'A popular pants',

        },
        {
            name: 'Clasic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 140,
            brand: 'Puma',
            rating: 4,
            numReviews: 10,
            countInStock: 10,
            description: 'A popular pants',

        },
    ],
};

export default data;