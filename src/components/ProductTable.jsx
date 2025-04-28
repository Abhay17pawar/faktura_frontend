const ProductTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            {['Article No.', 'Product/Service', 'In Price', 'Price', 'Unit', 'In Stock', 'Description'].map((head, idx) => (
              <th key={idx} className="p-3 border-b">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border-b">1234567890</td>
            <td className="p-3 border-b">This is a test product with fifty characters this!</td>
            <td className="p-3 border-b">900500</td>
            <td className="p-3 border-b">1500800</td>
            <td className="p-3 border-b">kilometers/hour</td>
            <td className="p-3 border-b">2500600</td>
            <td className="p-3 border-b">This is the description with fifty characters this</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  export default ProductTable;
  