import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";

const index = () => {
  const [alunos, setCursos] = useState([]);

  useEffect(() => {
    setCursos(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("alunos")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const itens = getAll();
      itens.splice(id, 1);
      window.localStorage.setItem("alunos", JSON.stringify(itens));
      setCursos(itens);
    }
  }

  return (
    <Pagina titulo="Alunos">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Alterar</th>
            <th>Remove</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matricula</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Cep</th>
            <th>Logradouro</th>
            <th>Completo</th>
            <th>Numero</th>
            <th>Bairro</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>
                <Link href={"/alunos/" + i}>
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
              <td>{item.CPF}</td>
              <td>{item.matricula}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.complemento}</td>
              <td>{item.numero}</td>
              <td>{item.bairro}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br></br>
      <Link href="/alunos/form" className="mb-2 btn btn-dark">
        Novo
      </Link>
    </Pagina>
  );
};

export default index;
