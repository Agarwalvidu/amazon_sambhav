import React, { useState } from "react";
import "./ItemList.css"; // External CSS

export const ItemList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample data for each query
  const queries = [
    {
      city: "Shipping Delay - Order Not Received",
      description: "Hello, I placed an order for three clothing items (Order ID: #12345) on October 30th, and I was...",
      detail: "Hello, I placed an order for three clothing items (Order ID: #12345) on October 30th, and I was supposed to receive them by November 10th. However, the order status still shows in transit, and I have not received any updates since November 5th. Can you please provide an update on the current location of my package and the revised delivery date? Thank you.",
      status: "Solved",
    },
    {
      city: "Incorrect Shipping Rates for Bulk Order",
      description: "I am trying to ship a bulk order of 100 T-shirts to the United States, but the shipping rates displayed...",
      detail: "I am trying to ship a bulk order of 100 T-shirts to the United States, but the shipping rates displayed during checkout are significantly higher than expected. We have a partnership agreement with one of your shipping carriers, but the discounted rates are not being applied. Could you assist in ensuring that the correct shipping rate is applied for bulk shipments? The order ID is #78901.",
      status: "Pending",
    },
    {
      city: "Missing Compliance Documentation for EU Export",
      description: "We are exporting a new line of clothing (Product ID: #54321) to several countries in the European...",
      detail: "We are exporting a new line of clothing (Product ID: #54321) to several countries in the European Union. While preparing the shipment, we noticed that certain compliance documentation, such as the CE marking and product safety reports, are missing from the system. We need these documents to clear customs in the EU. Can you help us upload or provide the necessary documents?",
      status: "Delayed",
    },
    {
      city: "Return and Refund Issue - Damaged Product Received",
      description: "I recently ordered a jacket (Order ID: #56789), and it arrived damaged. I initiated a return request...",
      detail: "I recently ordered a jacket (Order ID: #56789), and it arrived damaged. I initiated a return request, but the system is not allowing me to generate a return label, citing an invalid product category error. I would like to return this item and receive a refund. Could you assist me with generating the return label and processing my refund?",
      status: "Pending",
    },
    {
      city: "Product Compliance Issue - Incorrect Labeling on Fabric Composition",
      description: "We received a shipment of shirts (Product ID: #98765) labeled as 100% cotton, but after quality...",
      detail: "We received a shipment of shirts (Product ID: #98765) labeled as 100% cotton, but after quality testing, we found that the material contains a blend of polyester. This could result in a compliance issue, as the product labeling is inaccurate. Could you provide clarification on the product composition and update the product details for future orders? We may also need to notify customers who have already purchased this item.",
      status: "Pending",
    }
  ];

  const toggleDetail = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Function to determine the color based on the status
  const getStatusClass = (status) => {
    switch (status) {
      case "Solved":
        return "status-solved";
      case "Pending":
        return "status-pending";
      case "Delayed":
        return "status-delayed";
      default:
        return "";
    }
  };

  return (
    <div id="item-list">
        <span className="heading_query">Queries</span>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Query</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => toggleDetail(index)}>
                <td>{index + 1}</td>
                <td>
                  <div className="expand">
                    <div className="right-arrow">
                      {activeIndex === index ? "-" : "+"}
                    </div>
                    <div className="query-details">
                      <h2>{query.city}</h2>
                      <span className="description">{query.description}</span>
                    </div>
                  </div>
                </td>
                <td className={getStatusClass(query.status)}>{query.status}</td>
              </tr>
              {activeIndex === index && (
                <tr className="detail-row">
                  <td colSpan="3">
                    <div className="detail">
                      <span>{query.detail}</span>
                      <br />
                      <span className="button">Connect</span>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
