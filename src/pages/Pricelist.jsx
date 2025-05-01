import { useTheme, useMediaQuery } from "@mui/material";
import { Search, MoreHorizontal, ArrowRight } from "lucide-react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState, useEffect } from "react";
import axios from "axios";

const Pricelist = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [products, setProducts] = useState([]);
  const [editingField, setEditingField] = useState({ id: null, field: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchArticleNo, setSearchArticleNo] = useState("");

  // Fetch products from API
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get(`${API_BASE_URL}/products`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleFieldClick = (productId, fieldName) => {
    setEditingField({ id: productId, field: fieldName });
  };

  const handleFieldUpdate = (productId, fieldName, value) => {
    const product = products.find((p) => p.id === productId);
    if (!product || product[fieldName] === value) {
      setEditingField({ id: null, field: null });
      return;
    }

    axios
      .put(
        `${API_BASE_URL}/product/${productId}`,
        { [fieldName]: value },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        fetchProducts(); // Refresh the product list
      })
      .catch((error) => {
        console.error(`Error updating ${fieldName}:`, error);
      })
      .finally(() => {
        setEditingField({ id: null, field: null });
      });
  };

  const filteredProducts = products.filter((product) =>
    Object.values(product).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.article_no.toLowerCase().includes(searchArticleNo.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        {/* Input Fields */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              value={searchArticleNo}
              onChange={(e) => setSearchArticleNo(e.target.value)}
              className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-3xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Article No..."
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
          </div>

          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-3xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Product..."
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
          </div>
        </div>

        {/* Buttons */}
        <div
          className={`flex gap-2 flex-wrap ${
            isMobile ? "justify-between" : "justify-end"
          } md:flex-nowrap`}
        >
          <button className="h-10 px-4 flex items-center gap-2 bg-white text-gray-400 border border-gray-100 rounded-3xl shadow-sm hover:bg-gray-50 transition md:border-2 sm:border-4">
            {!isMobile && "New Product"}
            <AddCircleOutlineIcon className="text-green-500" fontSize="medium" />
          </button>

          <button className="h-10 px-4 flex items-center gap-2 bg-white text-gray-400 border border-gray-100 rounded-3xl shadow-sm hover:bg-gray-50 transition md:border-2 sm:border-4">
            {!isMobile && "Print List"}
            <LocalPrintshopIcon className="text-blue-500" fontSize="medium" />
          </button>

          <button className="h-10 px-4 flex items-center gap-2 bg-white text-gray-400 border border-gray-100 rounded-3xl shadow-sm hover:bg-gray-50 transition md:border-2 sm:border-4">
            {!isMobile && "Advanced Mode"}
            <ToggleOnIcon className="text-blue-500" fontSize="medium" />
          </button>
        </div>
      </div>

      {/* Desktop View */}
      {!isMobile ? (
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Table Headers */}
            <div className="grid grid-cols-11 gap-0 mb-3">
              <div className="text-sm text-gray-500 cursor-pointer">
                <div className="flex items-center gap-0 mx-1">
                  Article No.
                  <ArrowDownwardIcon className="text-blue-300" />
                </div>
              </div>
              <div className="col-span-3 text-sm text-gray-500 cursor-pointer">
                <div className="flex items-center gap-0 mx-2">
                  Product/Service
                  <ArrowDownwardIcon className="text-green-500" />
                </div>
              </div>
              <div className="text-sm text-gray-500 cursor-pointer">
                <div className="flex items-center gap-0 mx-2">In Price</div>
              </div>
              <div className="text-sm text-gray-500 cursor-pointer">
                <div className="flex items-center gap-0 mx-2">Price</div>
              </div>
              <div className="text-sm text-gray-500 cursor-pointer">
                <div className="flex items-center gap-0 mx-2">Unit</div>
              </div>
              <div className="text-sm text-gray-500 cursor-pointer">
                <div className="flex items-center gap-0 mx-2">In Stock</div>
              </div>
              <div className="col-span-3 text-sm text-gray-500 cursor-pointer">
                <div className="flex items-center gap-0 mx-2">Description</div>
              </div>
            </div>

            {/* Table Rows */}
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="grid grid-cols-11 gap-x-2 gap-y-2 mb-2 relative text-sm"
              >
                {index === 0 && (
                  <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="text-blue-500 w-5 h-5" />
                  </div>
                )}

                {/* Article No */}
                <div
                  className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleFieldClick(product.id, "article_no")}
                >
                  {editingField.id === product.id &&
                  editingField.field === "article_no" ? (
                    <input
                      type="text"
                      defaultValue={product.article_no}
                      onBlur={(e) =>
                        handleFieldUpdate(
                          product.id,
                          "article_no",
                          e.target.value
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleFieldUpdate(
                            product.id,
                            "article_no",
                            e.target.value
                          );
                        }
                      }}
                      className="w-full p-1 border rounded"
                      autoFocus
                    />
                  ) : (
                    product.article_no
                  )}
                </div>

                {/* Product/Service */}
                <div
                  className="col-span-3 p-2 border text-gray-700 border-blue-200 truncate rounded-xl hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleFieldClick(product.id, "product_service")}
                >
                  {editingField.id === product.id &&
                  editingField.field === "product_service" ? (
                    <input
                      type="text"
                      defaultValue={product.product_service}
                      onBlur={(e) =>
                        handleFieldUpdate(
                          product.id,
                          "product_service",
                          e.target.value
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleFieldUpdate(
                            product.id,
                            "product_service",
                            e.target.value
                          );
                        }
                      }}
                      className="w-full p-1 border rounded"
                      autoFocus
                    />
                  ) : (
                    product.product_service
                  )}
                </div>

                {/* In Price */}
                <div
                  className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleFieldClick(product.id, "in_price")}
                >
                  {editingField.id === product.id &&
                  editingField.field === "in_price" ? (
                    <input
                      type="number"
                      step="0.01"
                      defaultValue={product.in_price}
                      onBlur={(e) =>
                        handleFieldUpdate(
                          product.id,
                          "in_price",
                          e.target.value
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleFieldUpdate(
                            product.id,
                            "in_price",
                            e.target.value
                          );
                        }
                      }}
                      className="w-full p-1 border rounded"
                      autoFocus
                    />
                  ) : (
                    product.in_price
                  )}
                </div>

                {/* Price */}
                <div
                  className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleFieldClick(product.id, "price")}
                >
                  {editingField.id === product.id &&
                  editingField.field === "price" ? (
                    <input
                      type="number"
                      step="0.01"
                      defaultValue={product.price}
                      onBlur={(e) =>
                        handleFieldUpdate(
                          product.id,
                          "price",
                          e.target.value
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleFieldUpdate(
                            product.id,
                            "price",
                            e.target.value
                          );
                        }
                      }}
                      className="w-full p-1 border rounded"
                      autoFocus
                    />
                  ) : (
                    product.price
                  )}
                </div>

                {/* Unit */}
                <div
                  className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleFieldClick(product.id, "unit")}
                >
                  {editingField.id === product.id &&
                  editingField.field === "unit" ? (
                    <input
                      type="text"
                      defaultValue={product.unit}
                      onBlur={(e) =>
                        handleFieldUpdate(
                          product.id,
                          "unit",
                          e.target.value
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleFieldUpdate(
                            product.id,
                            "unit",
                            e.target.value
                          );
                        }
                      }}
                      className="w-full p-1 border rounded"
                      autoFocus
                    />
                  ) : (
                    product.unit
                  )}
                </div>

                {/* In Stock */}
                <div
                  className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleFieldClick(product.id, "in_stock")}
                >
                  {editingField.id === product.id &&
                  editingField.field === "in_stock" ? (
                    <input
                      type="number"
                      defaultValue={product.in_stock}
                      onBlur={(e) =>
                        handleFieldUpdate(
                          product.id,
                          "in_stock",
                          e.target.value
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleFieldUpdate(
                            product.id,
                            "in_stock",
                            e.target.value
                          );
                        }
                      }}
                      className="w-full p-1 border rounded"
                      autoFocus
                    />
                  ) : (
                    product.in_stock
                  )}
                </div>

                {/* Description */}
                <div
                  className="col-span-3 p-2 border text-gray-700 border-blue-200 truncate rounded-xl hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleFieldClick(product.id, "description")}
                >
                  {editingField.id === product.id &&
                  editingField.field === "description" ? (
                    <input
                      type="text"
                      defaultValue={product.description}
                      onBlur={(e) =>
                        handleFieldUpdate(
                          product.id,
                          "description",
                          e.target.value
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleFieldUpdate(
                            product.id,
                            "description",
                            e.target.value
                          );
                        }
                      }}
                      className="w-full p-1 border rounded"
                      autoFocus
                    />
                  ) : (
                    product.description
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Mobile View (simplified to only show Product/Service and Price)
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2">
            <div className="grid grid-cols-[1fr_auto_auto] gap-3 items-center mb-2 px-2">
              <div className="text-gray-600 text-sm">Product/Service</div>
              <div className="text-gray-600 text-sm w-24">Price</div>
              <div className="w-5" />
            </div>

            {filteredProducts.map((product, index) => (
              <div key={product.id} className="col-span-2 mb-3 relative">
                <div className="grid grid-cols-[1fr_auto_auto] gap-3 items-center px-2">
                  {index === 0 && (
                    <div className="absolute left-[-20px]">
                      <ArrowRight className="text-blue-500 w-5 h-5" />
                    </div>
                  )}
                  <div className="flex items-stretch gap-2">
                    {/* Product/Service with auto-save */}
                    <div 
                      className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl flex-1 hover:bg-blue-50 cursor-pointer"
                      onClick={() => handleFieldClick(product.id, "product_service")}
                    >
                      {editingField.id === product.id && editingField.field === "product_service" ? (
                        <input
                          type="text"
                          defaultValue={product.product_service}
                          onBlur={(e) => handleFieldUpdate(product.id, "product_service", e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
                          className="w-full p-1 border rounded"
                          autoFocus
                        />
                      ) : (
                        product.product_service
                      )}
                    </div>

                    {/* Price with auto-save */}
                    <div 
                      className="text-sm p-2 border border-blue-200 w-24 rounded-xl flex-1 hover:bg-blue-50 cursor-pointer"
                      onClick={() => handleFieldClick(product.id, "price")}
                    >
                      {editingField.id === product.id && editingField.field === "price" ? (
                        <input
                          type="number"
                          step="0.01"
                          defaultValue={product.price}
                          onBlur={(e) => handleFieldUpdate(product.id, "price", e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
                          className="w-full p-1 border rounded"
                          autoFocus
                        />
                      ) : (
                        product.price
                      )}
                    </div>
                  </div>
                  <button className="text-blue-500">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricelist;   