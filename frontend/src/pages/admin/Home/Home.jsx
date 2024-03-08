import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-black">Bienvenido Administrador!</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="transition-colors hover:cursor-pointer hover:text-white" />
          <RiArrowRightSLine className="transition-colors hover:cursor-pointer hover:text-white" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {/* Card */}
        <CardTicket
          ticket="total"
          totalTickets="Compras"
          text=""
          enlace="/compras/add"
          
        />
        <CardTicket
          ticket="pending"
          totalTickets="Inventario"
          text=""
          enlace="/inventario/add"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="Categorias"
          text=""
          enlace="/categorias/add"
        />
        <CardTicket
          ticket="close"
          totalTickets="Proveedores"
          text=""
          enlace="/proveedores/add"
        />
      </div>
      <div>
        <h1 className="my-10 text-2xl text-black">Información</h1>
      </div>
      <div className="p-8 bg-[#1E1F25] rounded-xl">
        
      </div>
    </div>
  );
};

export default Home;
