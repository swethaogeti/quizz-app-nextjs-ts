"use client";

import { GetServerSideProps } from "next";
import { Content } from "next/font/google";
import React, { useEffect, useState } from "react";
import { dehydrate, DehydratedState, QueryClient } from "react-query";
import styled from "styled-components";

const AnswerContainer = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  h5 {
    text-align: start;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.1rem 0;
  }
`;
const Title = styled.h2`
  color: gray;
`;

type Question = {
  id: string;
  question: string;
  answer: string;
};

const Result = ({ dehydratedState }: { dehydratedState: DehydratedState }) => {
  const {
    queries: [state],
  } = dehydratedState;
  const { state: currentState } = state;
  const { data: currentData } = currentState as { data: Question[] };
  console.log(currentData);
  const [answerDb, setAnswersDb] = useState([]);

  useEffect(() => {
    const data: any | undefined = localStorage.getItem("answers");
    setAnswersDb(JSON.parse(data));
  }, []);

  return (
    <AnswerContainer>
      {currentData.map((item) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
          <h5>{item.question} ----</h5>
          <span style={{ color: "green" }}>{item.answer}</span>
        </div>
      ))}
      <Title>Answers you enters</Title>
      {answerDb?.map((ans) => (
        <h4 key={ans} style={{ color: "purple" }}>
          {ans}
        </h4>
      ))}
    </AnswerContainer>
  );
};

export default Result;

// export const getServerSideProps = async (context) => {
//   const res = await fetch(process.env.ORIGIN + `/api/questionsData`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
const fetchQuestionData = async (): Promise<Question[]> => {
  const res = await fetch(process.env.ORIGIN + `/api/questionsData`);
  const data = await res.json();
  return data;
};
export const getServerSideProps: GetServerSideProps = async (Context) => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["questionData"], fetchQuestionData);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
