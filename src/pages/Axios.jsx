import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function Axios() {
  const [userData, setUserData] = useState([]);

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.address.street,
    },
  ];
  const data = customers?.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
      email: item?.email,
      address: item?.address,
    };
  });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  }, []);

  return (
    <>
    <div className="">
      {/* <div className="">
      <h1 className="text-red-400">Name</h1>
      {userData.map((data) => {
        return(<div>{data.name}</div>
        )
      })}
      </div>
      <div>
      <h1 className="text-red-400">emails</h1>
      {userData.map((data) => {
        return(<div>{data.email}</div>
        )
      })}
      </div> */}
    {userData ? (
      <DataTable columns={columns} data={data}></DataTable>
    ):(
      "loading"
    )}
    </div>
    </>
  );
}
