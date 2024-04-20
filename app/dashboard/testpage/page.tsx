async function getData() {
  const res = await fetch('http://localhost:3000/api/users/post')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main>
    <h1>Test API</h1>
    <p>*Tergantung format API JSON kalo array/nested array pake .map()</p>
    

    <div>
      
    </div>
    
    {/* <div>
      {Object.keys(data.nasional).map((category) => (
        <div className="text-bold" key={category}>
          <h2>{category}</h2>
          <ul>
            {Object.entries(data.nasional[category]).map(([product, details]) => (
              <li key={product}>
                <p>Product: {product}</p>
                <ul>
                  <li>ID: {data.id}</li>
                  <li>
                    Harga:{" "}
                    {Object.entries(data)
                      .filter(([key]) => key.startsWith("harga"))
                      .map(([key, value]) => (
                        <span key={key}>{key.slice(5)}: {value}</span>
                      ))}
                  </li>
                  <li>Penjualan: {data.penjualan}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div> */}
  
  </main>
}

// export default function Page() {
//   return <p>Api Error</p>;
// }