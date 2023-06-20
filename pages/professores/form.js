import Pagina from "@/components/Pagina";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { mask } from "remask";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  function salvar(dados) {
    const professores =
      JSON.parse(window.localStorage.getItem("professores")) || [];
    professores.push(dados);
    window.localStorage.setItem("professores", JSON.stringify(professores));
    push("/professores");
    setValue;
  }
  const validator = {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 2000,
      message: "A quantidade de caracteres máxima é 2000",
    },
  };

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Professores">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome", validator)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="CPF">
          <Form.Label>CPF: </Form.Label>
          <Form.Control
            type="text"
            placeholder="123.456.789.09"
            mask="999.999.999-99"
            {...register("CPF", validator)}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula: </Form.Label>
          <Form.Control type="value" {...register("matricula", validator)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salario: </Form.Label>
          <Form.Control
            type="text"
            placeholder="R$ 1.234,56"
            mask="R$ 99.999,99"
            {...register("salario", validator)}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" {...register("email", validator)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            type="tel"
            placeholder="(99) 99999-9999"
            mask="(99) 99999-9999"
            {...register("telefone", validator)}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>Cep: </Form.Label>
          <Form.Control
            type="text"
            placeholder="12345-678"
            mask="99999-999"
            {...register("cep", validator)}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control {...register("logradouro", validator)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Completo: </Form.Label>
          <Form.Control type="text" {...register("complemento")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control type="text" {...register("numero", validator)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control type="text" {...register("bairro", validator)} />
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
