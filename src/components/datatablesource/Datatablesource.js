export const userColums = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "user",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellwithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return <div className={`cellwithStatus ${params.row.status}`}> {params.row.status}</div>;
    },
  },
];

//Temporary data
export const userRows = [
  {
    id: 1,
    username: "snow",
    img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
    status: "active",
    email: "as@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "martya",
    img: "https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243",
    status: "pasive",
    email: "as@gmail.com",
    age: 35,
  },
];
