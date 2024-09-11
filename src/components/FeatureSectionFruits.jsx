import ProductCard from "./ProductCard";

const data = [
  {
    id: 0,
    img: "/src/images/product__1.webp",
    name: "Dried Mango",
    price: "₹ 300",
  },
  {
    id: 1,
    img: "/src/images/product__2.webp",
    name: "Crispy",
    price: "₹ 100",
  },
  {
    id: 2,
    img: "/src/images/product__3.webp",
    name: "Berries",
    price: "₹ 500",
  },
  {
    id: 3,
    img: "/src/images/product__4.webp",
    name: "Almond",
    price: "₹ 1300",
  },
];

const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-500">
            Buy Farm Fresh Fruits and Vegetables Online at Best Prices
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="bg-accent text-white px-4 py-1 rounded-full hover:bg-accentDark">
            Fruits
          </button>
          <button className="text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/src/images/feature__1.webp"
            alt="banner"
          />
        </div>
        {data.map((e) => (
          <ProductCard key={e.id} img={e.img} name={e.name} price={e.price} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionFruits;
