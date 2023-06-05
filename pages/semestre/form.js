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
    const semestre = JSON.parse(window.localStorage.getItem("semestre")) || [];
    semestre.push(dados);
    window.localStorage.setItem("semestre", JSON.stringify(semestre));
    push("/semestre");
  }

  return (
    <Pagina titulo="Semestre">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dataInicio">
          <Form.Label>Data de Inicio: </Form.Label>
          <Form.Control type="date" {...register("dataInicio")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dataFim">
          <Form.Label>Data de Fim: </Form.Label>
          <Form.Control type="date" {...register("dataFim")} />
        </Form.Group>

        <div className="text-center">
          <Button variant="dark" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/semestre">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
