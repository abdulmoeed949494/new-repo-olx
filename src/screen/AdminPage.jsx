import { useContext, useEffect, useState } from "react";
import { StateContext } from "../state";
import "../App.css";
import Header from "./Header";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const AdminPage = () => {
  const { LocalSt } = useContext(StateContext);

  const initialLocalSt = JSON.parse(LocalSt).flat()

  const [local, setLocal] = useState(initialLocalSt);
  const [filteredLocal, setFilteredLocal] = useState(initialLocalSt);
  const [filter, setFilter] = useState("All Orders");

  const handleLocal = (OrderNo) => {
    const updatedLocal = local.map((item) =>
      item.OrderNo === OrderNo ? { ...item, delivered: true } : item
  );
  setLocal(updatedLocal);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    let filtered = local;

    if (filter === "Pending Orders") {
      filtered = local.filter((item) => !item.delivered);
    } else if (filter === "Delivered Orders") {
      filtered = local.filter((item) => item.delivered);
    }

    setFilteredLocal(filtered);
  }, [filter, local]);

  const options = [
    { label: "All Orders", value: "All Orders" },
    { label: "Pending Orders", value: "Pending Orders" },
    { label: "Delivered Orders", value: "Delivered Orders" },
  ];

  console.log(filteredLocal);

    const localDataSave = () => {
    localStorage.setItem("userCart", JSON.stringify(local))
  }

  const data = [
    {name: "Pending", value: local.filter((item) => !item.delivered).length},
    {name: "Delivered", value: local.filter((item) => item.delivered).length},
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <Header />
      <div>
        <select onChange={handleFilterChange} value={filter}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-20">
        <table>
          <thead>
            <tr className="text-white bg-blue-500">
              <th>Order No</th>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Seller</th>
              <th>Category</th>
              <th>Order Delivered</th>
              <th>Order Button</th>
            </tr>
          </thead>
          <tbody>
            {filteredLocal.map((item) => (
              <tr className="hover:bg-gray-200" key={item.id}>
                <td>{item.OrderNo}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.seller}</td>
                <td>{item.category}</td>
                <td>{item.delivered ? "Delivered" : "Pending..."}</td>
                <td>
                  <button
                    className="border-2 border-black rounded-md bg-green-400 text-white w-20 h-10 hover:bg-blue-500"
                    onClick={() => handleLocal(item.OrderNo)}
                    disabled={item.delivered}
                  >
                    {item.delivered ? "Delivered" : "Deliver"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <button className="border-2 border-black rounded-md bg-green-400 text-white w-20 h-10 hover:bg-blue-500" onClick={localDataSave}>Save</button>
        </table>
          <br/>
          <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={data}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS]} />
            ))}
          </Pie>
        </PieChart>
          {/* <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>  */}








      </div>
    </>
  );
};

export default AdminPage;

