import CategoryCard from "./CategoryCard";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "29 Products",
    img: "/src/images/category__1.jpg",
  },
  {
    id: 1,
    name: "Fresh Vegs",
    count: "3 Products",
    img: "/src/images/category__2.jpg",
  },
  {
    id: 2,
    name: "Canned Goods",
    count: "9 Products",
    img: "/src/images/category__3.jpg",
  },
  {
    id: 3,
    name: "Bread & Bakery",
    count: "9 Products",
    img: "/src/images/category__4.jpg",
  },
  {
    id: 4,
    name: "Fishes",
    count: "7 Products",
    img: "/src/images/category__5.jpg",
  },
  {
    id: 5,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "/src/images/category__1.jpg",
  },
  {
    id: 6,
    name: "Eggs & Dairy",
    count: "4 Products",
    img: "/src/images/category__6.jpg",
  },
  {
    id: 7,
    name: "Soft Drinks",
    count: "22 Products",
    img: "/src/images/category__7.jpg",
  },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((e) => (
          <CategoryCard key={e.id} img={e.img} name={e.name} count={e.count} />
        ))}
      </div>
    </div>
  );
};

export default Category;
