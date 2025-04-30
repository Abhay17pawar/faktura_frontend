import { useTheme, useMediaQuery } from "@mui/material"
import {
  Search,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop"
import ToggleOnIcon from "@mui/icons-material/ToggleOn"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

const Pricelist = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const products = [
    {
      id: 1,
      articleNo: "1234567890",
      productService: "This is a test product with fifty characters this!",
      inPrice: "900500",
      price: "1500800",
      unit: "kilometers/hour",
      inStock: "2500600",
      description: "This is the description with fifty characters this",
    },
    {
      id: 2,
      articleNo: "1234567890",
      productService: "This is a test product with fifty characters this!",
      inPrice: "900500",
      price: "1500800",
      unit: "kilometers/hour",
      inStock: "1500800",
      description: "This is the description with fifty characters this",
    },
    {
      id: 3,
      articleNo: "12345",
      productService: "Sony DSLR 12345",
      inPrice: "10000",
      price: "15000",
      unit: "piece",
      inStock: "50",
      description: "High quality camera with professional features",
    },
    {
      id: 4,
      articleNo: "54321",
      productService: "Random product",
      inPrice: "1000",
      price: "1234",
      unit: "piece",
      inStock: "100",
      description: "Just a random product in our inventory",
    },
  ]

  return (
    <div className="p-4">
      {/* Inputs + Buttons */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        {/* Input Fields */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-3xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Article No..."
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
          </div>

          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-3xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Product..."
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
          </div>
        </div>

        {/* Buttons */}
        <div className={`flex gap-2 flex-wrap ${isMobile ? "justify-between" : "justify-end"} md:flex-nowrap`}>
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

      {/* Table for desktop */}
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
    <div className="flex items-center gap-0 mx-2">
      In Price
    </div>
  </div>
  <div className="text-sm text-gray-500 cursor-pointer">
    <div className="flex items-center gap-0 mx-2">
      Price
    </div>
  </div>
  <div className="text-sm text-gray-500 cursor-pointer">
    <div className="flex items-center gap-0 mx-2">
      Unit
    </div>
  </div>
  <div className="text-sm text-gray-500 cursor-pointer">
    <div className="flex items-center gap-0 mx-2">
      In Stock
    </div>
  </div>
  <div className="col-span-3 text-sm text-gray-500 cursor-pointer">
    <div className="flex items-center gap-0 mx-2">
      Description
    </div>
  </div>
  <div className="col-span-3 text-sm text-gray-500 cursor-pointer">
    <div className="flex items-center gap-0 mx-2">
      {/* Empty header cell (for actions or future additions) */}
    </div>
  </div>

        </div>

          {/* Table Rows */}
          {products.map((product, index) => (
  <div key={product.id} className="grid grid-cols-11 gap-x-2 gap-y-2 mb-2 relative text-sm">
    {index === 0 && (
      <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
        <ArrowRight className="text-blue-500 w-5 h-5" />
      </div>
    )}
    <div className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl">{product.articleNo}</div>
    <div className="col-span-3 p-2 border text-gray-700 border-blue-200 truncate rounded-xl">{product.productService}</div>
    <div className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl">{product.inPrice}</div>
    <div className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl">{product.price}</div>
    <div className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl">{product.unit}</div>
    <div className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl">{product.inStock}</div>
    <div className="col-span-3 p-2 border text-gray-700 border-blue-200 truncate rounded-xl">{product.description}</div>
  </div>
))}
          </div>
        </div>
      ) : (
        // Mobile view
        <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <div className="grid grid-cols-[1fr_auto_auto] gap-3 items-center mb-2 px-2">
            <div className="text-gray-600 text-sm">Product/Service</div>
            <div className="text-gray-600 text-sm w-24">Price</div>
            <div className="w-5" />
          </div>      

            {products.map((product, index) => (
              <div key={product.id} className="col-span-2 mb-3 relative">
                <div className="grid grid-cols-[1fr_auto_auto] gap-3 items-center px-2">
                  {index === 0 && (
                    <div className="absolute left-[-20px]">
                      <ArrowRight className="text-blue-500 w-5 h-5" />
                    </div>
                  )}
                  <div className="p-2 border text-gray-700 border-blue-200 truncate rounded-xl">
                    {product.productService}
                  </div>
                  <div className="text-sm p-2 border border-blue-100 w-24 rounded-xl">
                    {product.price}
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
  )
}

export default Pricelist;
