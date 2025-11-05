function CategorySection() {
  const categories = [
    {
      id: 1,
      name: "Tecnología",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      id: 2,
      name: "Ropa",
      img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      id: 3,
      name: "Hogar",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046869.png",
    },
    {
      id: 4,
      name: "Deportes",
      img: "https://cdn-icons-png.flaticon.com/512/1165/1165203.png",
    },
    {
      id: 5,
      name: "Juguetes",
      img: "https://cdn-icons-png.flaticon.com/512/4326/4326936.png",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">🧭 Categorías Populares</h2>
        <div className="row justify-content-center">
          {categories.map((cat) => (
            <div key={cat.id} className="col-6 col-md-3 col-lg-2 mb-4">
              <div
                className="card border-0 shadow-sm p-3 h-100 d-flex align-items-center justify-content-center"
                style={{ transition: "all 0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="mb-3"
                  style={{ width: "70px", height: "70px", objectFit: "contain" }}
                />
                <h6 className="fw-semibold">{cat.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
