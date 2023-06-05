import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";

const index = () => {
  const [semestre, setCursos] = useState([]);

  useEffect(() => {
    setCursos(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("semestre")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const itens = getAll();
      itens.splice(id, 1);
      window.localStorage.setItem("semestre", JSON.stringify(itens));
      setCursos(itens);
    }
  }

  return (
    <Pagina titulo="Semestre">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Alterar</th>
            <th>Remove</th>
            <th>Nome</th>
            <th>Data de Inicio</th>
            <th>Data de Fim</th>
          </tr>
        </thead>
        <tbody>
          {semestre.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>
                <Link href={"/semestre/" + i}>
                  <BsPencilFill title="Alterar" className="text-danger" />
                </Link>{" "}
              </td>
              <td>
                <BsFillTrash3Fill
                  title="Excluir"
                  onClick={() => excluir(i)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.dataInicio}</td>
              <td>{item.dataFim}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br></br>
      <Link href="/semestre/form" className="mb-2 btn btn-dark">
        Novo
      </Link>
    </Pagina>
  );
};

export default index;
