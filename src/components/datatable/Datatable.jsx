import "./datatable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColums, userRows } from "../datatablesource/Datatablesource";

const Datatable = () => {
  return (
    <div className="datatable">
      <DataGrid rows={userRows} columns={userColums} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  );
};

export default Datatable;
