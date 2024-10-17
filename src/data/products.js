import tesla from '../images/tesla.jpg'
import watch from '../images/watch.jpg'
import smartphone from '../images/smartphone.jpg'
import bike from '../images/bike.jpg'
import bicycle from '../images/bicycle.jpg'




export const products = [
    {
        id: 0,
        name: 'Apple iPhone 13',
        description: 'Latest iPhone model with A15 Bionic chip',
        price: 999,
        category: 'Mobile Phones',
        images: [
            '/src/images/house1.webp',
            '/src/images/house2.webp',
            '/src/images/house3.webp',
            '/src/images/house1.webp',
            '/src/images/house2.webp',
            '/src/images/house3.webp',
            '/src/images/house1.webp',
            '/src/images/house2.webp',
            '/src/images/house3.webp',
        ],
        stock: 50,
        rating: 4.5,
        auctionEndTime: '2024-09-30T18:00:00Z',
    },
    {
        id: 1,
        name: 'Samsung 4K LED TV',
        description: '55-inch Ultra HD Smart LED TV',
        price: 699,
        category: 'Televisions',
        images: [
            '/src/images/house2.webp',
            '/src/images/car2.png',
        ],
        stock: 30,
        rating: 4.7,
        auctionEndTime: '2024-09-25T20:00:00Z',
    },
    {
        id: 2,
        name: 'Dell XPS 13 Laptop',
        description: '13-inch laptop with Intel i7 processor',
        price: 1199,
        category: 'Laptops',
        images: [
            '/src/images/house3.webp',
            '/src/images/car2.png',
        ],
        stock: 20,
        rating: 4.8,
        auctionEndTime: '2024-10-01T15:00:00Z',
    },
    {
        id: 3,
        name: 'Rolex Submariner Watch',
        description: 'Luxury watch with waterproof design',
        price: 8999,
        category: 'Watches',
        images: [
            watch

        ],
        stock: 5,
        rating: 4.9,
        auctionEndTime: '2024-09-28T22:00:00Z',
    },
    {
        id: 4,
        name: 'Tesla Model S',
        description: 'Electric car with autopilot feature',
        price: 79999,
        category: 'Cars',
        images: [
            tesla
        ],
        stock: 2,
        rating: 4.9,
        auctionEndTime: '2024-12-15T12:00:00Z',
    },
    {
        id: 5,
        name: 'Honda Bike',
        description: 'Electric Bike with autopilot feature',
        price: 79999,
        category: 'Bikes',
        images: [
            bike
        ],
        stock: 2,
        rating: 4.9,
        auctionEndTime: '2024-12-15T12:00:00Z',
    },
    {
        id: 6,
        name: 'Samsung Mobile',
        description: 'Electric Mobile with autopilot feature',
        price: 79999,
        category: 'Smart Phones',
        images: [
            smartphone
        ],
        stock: 2,
        rating: 4.9,
        auctionEndTime: '2024-12-15T12:00:00Z',
    },
    {
        id: 7,
        name: 'Bicycle',
        description: 'Electric bycycle with autopilot feature',
        price: 79999,
        category: 'Bicycles',
        images: [
            bicycle
        ],
        stock: 2,
        rating: 4.9,
        auctionEndTime: '2024-12-15T12:00:00Z',
    }
];
