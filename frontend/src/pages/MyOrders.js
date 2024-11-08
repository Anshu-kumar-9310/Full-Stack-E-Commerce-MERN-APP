import React, { useEffect, useState } from "react";
import moment from "moment";
import SummaryApi from "../common";
import displayCurrency from "../helpers/displayCurrency";

const MyOrders = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(SummaryApi.myOrders.url, {
        method: SummaryApi.myOrders.method,
        credentials: "include",
      });

      const responseData = await response.json();

      // Check if the response data was successful and contains an array of orders
      if (responseData.success && Array.isArray(responseData.data)) {
        setData(responseData.data);
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div className="container mx-auto py-6 px-4 sm:px-8 ">
      <h2 className="text-2xl font-semibold text-center mb-6">Your Orders</h2>
      {data.length === 0 && (
        <div className="text-center text-lg my-3 bg-white p-6 rounded-lg shadow-md">
          <p className="font-semibold capitalize text-gray-600">
            You have not placed an order yet.
          </p>
        </div>
      )}

      <div className="space-y-8">
        {data.map((order, orderIndex) => (
          <div
            key={order.userId + orderIndex}
            className="bg-white rounded-lg shadow-md p-6 space-y-4"
          >
            {/* Order Header */}
            <div className="border-b pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <p className="text-gray-600 text-sm">Order Id: {order?._id}</p>
                <p className="text-lg font-semibold text-gray-700">
                  {moment(order.createdAt).format("LL")}
                </p>
              </div>
              <div className="text-right mt-2 sm:mt-0">
                <p className="text-gray-600 text-sm">Total Amount:</p>
                <p className="text-xl font-semibold text-red-600">
                  {displayCurrency(order.totalAmount)}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10">
              {/* Product Details */}
            <div className="grid grid-cols-1 gap-4 md:max-w-[70%] w-full">
              {order.productDetails.map((product, productIndex) => (
                <div
                  key={product.name + productIndex}
                  className="flex items-start gap-4 p-4 bg-slate-100 rounded-lg w-full h-fit cursor-pointer"
                >
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-md border mix-blend-multiply"
                  />
                  <div className="flex-1">
                    <p className="text-lg font-medium text-gray-800 line-clamp-1">
                      {product.name}
                    </p>
                    <div className="flex items-center md:gap-4 mt-2 flex-col md:flex-row">
                      <p className="text-lg text-red-500">
                        {displayCurrency(product.price)}
                      </p>
                      <p className="text-gray-700">Quantity: {product.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment and Shipping Details */}
            <div className=" flex flex-col gap-4  p-4 rounded-lg">
              {/* Payment Details */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">
                  Payment Details
                </h3>
                <p className="text-gray-700 ml-1">
                  Method:{" "}
                  <span className="font-medium">
                    {order.paymentDetails.payment_method_type[0] || "N/A"}
                  </span>
                </p>
                <p className="text-gray-700 ml-1">
                  Status:{" "}
                  <span className="font-medium">
                    {order.paymentDetails.payment_status || "N/A"}
                  </span>
                </p>
              </div>

              {/* Shipping Details */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">
                  Shipping Details
                </h3>
                {order.shipping_options && order.shipping_options.length > 0 ? (
                  order.shipping_options.map((shipping, shippingIndex) => (
                    <p key={shippingIndex} className="text-gray-700 ml-1">
                      Shipping Amount:{" "}
                      <span className="font-medium">
                        {displayCurrency(shipping.shipping_amount)}
                      </span>
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600">No shipping options available</p>
                )}
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
