import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">UNU | NTB</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <Person2OutlinedIcon className="icon" />
            <span>Data Mahasiswa</span>
          </li>
          <li>
            <EventNoteOutlinedIcon className="icon" />
            <span>KRS</span>
          </li>
          <li>
            <CurrencyBitcoinOutlinedIcon className="icon" />
            <span>Pembayaran</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Pengajuan Cuti</span>
          </li>
          <p className="title"></p>
          <li>
            <span>Beasiswa</span>
          </li>
          <li>
            <span>Akademik</span>
          </li>
          <li>
            <span>Pengajuan Bimbingan</span>
          </li>
          <li>
            <span>Seleksi KIP Mahasiswa</span>
          </li>
          <li>
            <span>Kuisioner</span>
          </li>
          <li>
            <span>Info Kerja</span>
          </li>
          <li>
            <span>KKN</span>
          </li>
          <li>
            <span>PPL</span>
          </li>
          <li>
            <span>Tugas Akhir</span>
          </li>
          <li>
            <span>Wisuda</span>
          </li>
          <li>
            <span>Pembelajaran Digital</span>
          </li>
          <li>
            <span>Perpustakaan</span>
          </li>
          <li>
            <span>Info Mahasiswa</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
