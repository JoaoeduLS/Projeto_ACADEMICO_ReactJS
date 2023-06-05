import Pagina from "@/components/Pagina";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    const disciplinas =
      JSON.parse(window.localStorage.getItem("disciplinas")) || [];
    disciplinas.push(dados);
    window.localStorage.setItem("disciplinas", JSON.stringify(disciplinas));
    push("/disciplinas");
  }

  return (
    <Pagina titulo="Disciplinas">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cursos">
          <Form.Label>Cursos: </Form.Label>
          <Form.Select {...register("cursos")}>
            <option></option>
            <option value="engenharia-civil">Engenharia Civil</option>
            <option value="engenharia-computacao">
              Engenharia de Computação
            </option>
            <option value="medicina">Medicina</option>
            <option value="direito">Direito</option>
            <option value="administracao">Administração</option>
            <option value="psicologia">Psicologia</option>
            <option value="arquitetura">Arquitetura</option>
            <option value="jornalismo">Jornalismo</option>
            <option value="ciencias-computacao">Ciências da Computação</option>
            <option value="economia">Economia</option>
          </Form.Select>
        </Form.Group>

        <div className="text-center">
          <Button variant="dark" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/disciplinas">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
