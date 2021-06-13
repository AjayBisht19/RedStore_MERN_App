 import bcrypt from 'bcryptjs'
 const data={
    users:[{
       name:'Ajay',
       email:'ajay@redstore.com',
       password: bcrypt.hashSync('redstore',8),
       isAdmin: true,
    },
    {
      name:'Shubham',
       email:'shubham@gmail.com.com',
       password:bcrypt.hashSync('shubham',8),
       isAdmin: false,
    }
   ],
 products:[
     {
        name:'accessory',
        category:'Clothes',
        brand:'Nike',
        image:'/images/product-1.jpg',
        price:'750',
        rating:'5',
        numReviews:'6',
        countInStock:9,
        description:'Best one'
     },
     {
        name:'accessory1',
        category:'Clothes',
        brand:'Nike',
        image:'/images/product-2.jpg',
        price:'650',
        rating:'4',
        numReviews:'72',
        countInStock:9,
        description:'deesc 2'
     },
     {
        name:'accessory2',
        category:'Clothes',
        brand:'Nike',
        image:'/images/product-3.jpg',
        price:'850',
        rating:'4.5',
        numReviews:'23',
        countInStock:0,
        description:'desc 3'
     },
     {
        name:'accessory3',
        category:'Clothes',
        brand:'Nike',
        image:'/images/product-4.jpg',
        price:'850',
        rating:'3.5',
        numReviews:'57',
        countInStock:9,
        description:'desc 3'
     },
     {
      name:'accessory4',
      category:'Clothes',
      brand:'Nike',
      image:'/images/product-5.jpg',
      price:'750',
      rating:'5',
      numReviews:'6',
      countInStock:9,
      description:'Best one'
   },
   {
      name:'accessory5',
      category:'Clothes',
      brand:'Nike',
      image:'/images/product-6.jpg',
      price:'650',
      rating:'4',
      numReviews:'72',
      countInStock:9,
      description:'deesc 2'
   },
   {
      name:'accessory6',
      category:'Clothes',
      brand:'Nike',
      image:'/images/product-7.jpg',
      price:'850',
      rating:'4.5',
      numReviews:'23',
      countInStock:0,
      description:'desc 3'
   },
   {
      name:'accessory7',
      category:'Clothes',
      brand:'Nike',
      image:'/images/product-8.jpg',
      price:'850',
      rating:'3.5',
      numReviews:'57',
      countInStock:9,
      description:'desc 3'
   },
   {
      name:'accessory8',
      category:'Clothes',
      brand:'Nike',
      image:'/images/product-9.jpg',
      price:'750',
      rating:'5',
      numReviews:'6',
      countInStock:9,
      description:'Best one'
   },
   {      
      name:'accessory9',
      category:'Clothes',
      brand:'Nike',
      image:'/images/product-10.jpg',
      price:'650',
      rating:'4',
      numReviews:'72',
      countInStock:9,
      description:'deesc 2'
   },
   {      
      name:'accessory10',
      category:'Clothes',
      brand:'Nike',
      image:'/images/product-11.jpg',
      price:'850',
      rating:'4.5',
      numReviews:'23',
      countInStock:0,
      description:'desc 3'
   },
   {      
      name:'accessory11',
      category:'Clothes',
      brand:'Nike',
      image:'/images/product-12.jpg',
      price:'850',
      rating:'3.5',
      numReviews:'57',
      countInStock:9,
      description:'desc 3'
   }
 ]
};

export default data;