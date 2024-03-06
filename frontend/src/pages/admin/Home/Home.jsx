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
        <h1 className="text-4xl text-white">Good morning, jotredev!</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="transition-colors hover:cursor-pointer hover:text-white" />
          <RiArrowRightSLine className="transition-colors hover:cursor-pointer hover:text-white" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Card */}
        <CardTicket
          ticket="total"
          totalTickets="145,000"
          text="Tickets totales"
        />
        <CardTicket
          ticket="pending"
          totalTickets="5,000"
          text="Tickets pendientes"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="130,000"
          text="Tickets en proceso"
        />
        <CardTicket
          ticket="close"
          totalTickets="10,000"
          text="Tickets cerrados"
        />
      </div>
      <div>
        <h1 className="my-10 text-2xl text-white">Tickets más recientes</h1>
      </div>
      <div className="p-8 bg-secondary-100 rounded-xl">
        <div className="hidden grid-cols-1 gap-4 p-4 mb-10 md:grid md:grid-cols-5">
          <h5>ID</h5>
          <h5>Descripción</h5>
          <h5>Estatus</h5>
          <h5>Fecha</h5>
          <h5>Acciones</h5>
        </div>
        <div className="grid items-center grid-cols-1 gap-4 p-4 mb-4 md:grid-cols-5 bg-secondary-900 rounded-xl">
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Estatus</h5>
            <span className="px-2 py-1 text-yellow-500 rounded-lg bg-yellow-500/10">
              Abierto
            </span>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Fecha</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center p-2 transition-colors rounded-lg gap-x-2 bg-secondary-100">
                  Acciones
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="flex items-center flex-1 p-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="flex items-center flex-1 p-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 gap-4 p-4 mb-4 md:grid-cols-5 bg-secondary-900 rounded-xl">
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Estatus</h5>
            <span className="px-2 py-1 text-blue-500 rounded-lg bg-blue-500/10">
              En proceso
            </span>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Fecha</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center p-2 transition-colors rounded-lg gap-x-2 bg-secondary-100">
                  Acciones
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="flex items-center flex-1 p-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="flex items-center flex-1 p-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 gap-4 p-4 mb-4 md:grid-cols-5 bg-secondary-900 rounded-xl">
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Estatus</h5>
            <span className="px-2 py-1 text-green-500 rounded-lg bg-green-500/10">
              Cerrado
            </span>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Fecha</h5>
            <span>28 octubre 2022</span>
          </div>
          <div>
            <h5 className="mb-2 font-bold text-white md:hidden">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center p-2 transition-colors rounded-lg gap-x-2 bg-secondary-100">
                  Acciones
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="flex items-center flex-1 p-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="flex items-center flex-1 p-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
