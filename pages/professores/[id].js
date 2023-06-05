import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      const id = query.id;
      const professores = JSON.parse(
        window.localStorage.getItem("professores")
      );
      const curso = professores[id];

      for (let atributo in curso) {
        setValue(atributo, curso[atributo]);
      }
    }
  }, [query.id]);

  function salvar(dados) {
    const professores =
      JSON.parse(window.localStorage.getItem("professores")) || [];
    professores.splice(query.id, 1, dados);
    window.localStorage.setItem("professores", JSON.stringify(professores));
    push("/professores");
  }

  return (
    <Pagina titulo="Professores">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="CPF">
          <Form.Label>CPF: </Form.Label>
          <Form.Control type="bigint" {...register("CPF")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula: </Form.Label>
          <Form.Control type="value" {...register("matricula")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salario: </Form.Label>
          <Form.Control type="text" {...register("salario")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" {...register("email")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control type="tel" {...register("telefone")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>Cep: </Form.Label>
          <Form.Control type="text" {...register("cep")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control type="text" {...register("logradouro")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Completo: </Form.Label>
          <Form.Control type="text" {...register("complemento")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control type="text" {...register("numero")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control type="text" {...register("bairro")} />
        </Form.Group>
        <div className="text-center">
          <Button variant="dark" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/professores">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
