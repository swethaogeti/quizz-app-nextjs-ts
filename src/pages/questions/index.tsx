import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { DehydratedState } from "react-query";
type question = { question: string; answer: string; id: string };
type Data = question[];

const questions = ({ data }: { data: Data }) => {
  console.log(data);
  return (
    <div>
      <h1>This is question page </h1>
      {data.map((item) => (
        <>
          <p key={item.id}>{item.question}</p>
          <Link href="/questions/[question]" as={`/questions/${item.id}`}>
            {" "}
            Go
          </Link>
        </>
      ))}
      <Link href="questions/[question]" as={`questions/${1}`}>
        enter the quiz
      </Link>
      <div></div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(process.env.QUESTIONS_PATH as string);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default questions;
