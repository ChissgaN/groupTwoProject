import React from "react";
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "IMAGEN", uid: "imagen" },
  { name: "NOMBRE", uid: "nombre" },
  { name: "CODIGO", uid: "codigo", sortable: true },
  { name: "MARCA", uid: "marca", sortable: true },
  { name: "CATEGORIA", uid: "categoria" },
  { name: "COSTO", uid: "costo" },
  { name: "PRECIO", uid: "precio", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "COMPAÑIA", uid: "compañia" },
  { name: "FECHA", uid: "fecha" },
  { name: "N° FACTURA", uid: "N° factura" },
  { name: "PROVEEDOR", uid: "proveedor" },
  { name: "ESTADO DE COMPRA", uid: "estado de compra" },
  { name: "TOTAL", uid: "total" },
  { name: "PAGADO", uid: "pagado" },
  { name: "DEBIDO", uid: "debido" },
  { name: "ESTADO DE PAGO", uid: "estado de pago" },
  { name: "ACTIONS", uid: "actions" },

 
];

const statusOptions = [
  { name: "ORDENADO", uid: "ordenado" },
  { name: "RECIBIDO", uid: "recibido" },
  // { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    precio: "500000 COP",
    codigo: "ABC123",
    marca: "active",
    categoria: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    costo: "530000 COP",
  },
  {
    id: 2,
    name: "Zoey Lang",
    precio: "750000 COP",
    codigo: "XYZ456",
    marca: "paused",
    categoria: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    costo: "720000 COP",
  },
  {
    id: 3,
    name: "Jane Fisher",
    precio: "350000 COP",
    codigo: "DEF789",
    marca: "active",
    categoria: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    costo: "380000 COP",
  },
  {
    id: 4,
    name: "William Howard",
    precio: "900000 COP",
    codigo: "GHI101",
    marca: "vacation",
    categoria: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    costo: "920000 COP",
  },
  {
    id: 5,
    name: "Kristen Copper",
    precio: "650000 COP",
    codigo: "JKL202",
    marca: "active",
    categoria: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    costo: "680000 COP",
  },
  {
    id: 6,
    name: "Brian Kim",
    precio: "800000 COP",
    codigo: "MNO303",
    categoria: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    costo: "830000 COP",
    marca: "Active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    precio: "450000 COP",
    codigo: "PQR404",
    marca: "paused",
    categoria: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    costo: "480000 COP",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    precio: "550000 COP",
    codigo: "STU505",
    marca: "active",
    categoria: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    costo: "580000 COP",
  },
  {
    id: 9,
    name: "Frank Harrison",
    precio: "700000 COP",
    codigo: "VWX606",
    marca: "vacation",
    categoria: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    costo: "730000 COP",
  },
  {
    id: 10,
    name: "Emma Adams",
    precio: "600000 COP",
    codigo: "YZA707",
    marca: "active",
    categoria: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    costo: "630000 COP",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    precio: "850000 COP",
    codigo: "BCD808",
    marca: "active",
    categoria: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    costo: "880000 COP",
  },
  {
    id: 12,
    name: "Megan Richards",
    precio: "950000 COP",
    codigo: "EFG909",
    marca: "paused",
    categoria: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    costo: "980000 COP",
  },
  {
    id: 13,
    name: "Oliver Scott",
    precio: "400000 COP",
    codigo: "HIJ010",
    marca: "active",
    categoria: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    costo: "420000 COP",
  },
  {
    id: 14,
    name: "Grace Allen",
    precio: "300000 COP",
    codigo: "KLM111",
    marca: "active",
    categoria: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    costo: "330000 COP",
  },
  {
    id: 15,
    name: "Noah Carter",
    precio: "720000 COP",
    codigo: "NOP212",
    marca: "paused",
    categoria: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    costo: "750000 COP",
  },
];

export { columns, users, statusOptions };