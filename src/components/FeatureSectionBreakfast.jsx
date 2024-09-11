import ProductCard from "./ProductCard";

const data = [
  {
    id: 0,
    img: "/src/images/post__1.webp",
    name: "Sauces",
    price: "₹ 300",
  },
  {
    id: 1,
    img: "/src/images/post__2.webp",
    name: "Spicy",
    price: "₹ 100",
  },
  {
    id: 2,
    img: "/src/images/post__3.webp",
    name: "Peanut Butter",
    price: "₹ 500",
  },
  {
    id: 3,
    img: "/src/images/post__1.webp",
    name: "Fruit Juice",
    price: "₹ 1300",
  },
];

const FeatureSectionBreakfast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
          <p className="text-gray-500">
            Buy Best Quality Breakfast Online at Best Prices
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="bg-accent text-white px-4 py-1 rounded-full hover:bg-accentDark">
            Snacks
          </button>
          <button className="text-gray-600 hover:text-accent">Pizza</button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/src/images/feature__2.webp"
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

export default FeatureSectionBreakfast;
