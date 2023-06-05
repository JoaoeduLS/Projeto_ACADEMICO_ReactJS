import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";

const index = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    setCursos(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("cursos")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const itens = getAll();
      itens.splice(id, 1);
      window.localStorage.setItem("cursos", JSON.stringify(itens));
      setCursos(itens);
    }
  }

  return (
    <Pagina titulo="Cursos">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Alterar</th>
            <th>Remove</th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>
                <Link href={"/cursos/" + i}>
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
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br></br>
      <Link href="/cursos/form" className="mb-2 btn btn-dark">
        Novo
      </Link>
    </Pagina>
  );
};

export default index;
