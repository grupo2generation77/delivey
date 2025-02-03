function Home() {
  return (
    <>
      <div className="flex bg-ice flex-col items-center justify-center min-h-screen p-6">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-6">Delivey 77</h1>

        {/* Imagem */}
        <div className="bg-ice shadow-lg rounded-2xl p-4 w-1/2 flex justify-center mb-6">
          <img
            src="https://ik.imagekit.io/lkxant9gz/rb_2149442162.png?updatedAt=1738340839229"
            alt="Logo RH"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            {["Pizza", "Hambúrguer", "Sushi", "Salada"].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "16px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={`/images/${item.toLowerCase()}.jpg`}
                  alt={item}
                  style={{
                    width: "96px",
                    height: "96px",
                    objectFit: "cover",
                    marginBottom: "8px",
                    borderRadius: "50%",
                  }}
                />
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
