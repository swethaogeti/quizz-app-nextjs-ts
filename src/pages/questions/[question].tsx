"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQueries,
  useQuery,
} from "react-query";
import styled from "styled-components";
import { GetStaticProps, GetStaticPaths } from "next";
const QuestionContainer = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const QuestionDiv = styled.div`
  h3 {
    color: gray;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1rem 0;
    text-align: center;
  }

  button {
    background-color: #df006c;
    padding: 0.5rem;
    margin: 0.5rem 0;
    outline: none;
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const Input = styled.input`
  outline: none;
  padding: 0.5rem;
  width: 100%;
  border-radius: 2px;
  border: 2px solid grey;
  font-size: 1rem;
`;

const ButtonsContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #e7006c;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
`;

type Data = {
  id: number;
  question: string;
  answer: string;
};

// type State = {
//   data: Data[];
// };

const Question = ({ dehydratedData }: { dehydratedData: DehydratedState }) => {
  const router = useRouter();
  const { question } = router.query as { question: string };

  console.log("dehydrated data ", dehydratedData, question);

  const [currrentData, setCurrentData] = useState<Data | undefined>();
  const [answerArray, setAnswerArray] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");
  const {
    queries: [state],
  } = dehydratedData ?? { queries: [] };

  const { state: currentState } = state ?? { state: null };
  const { data: currentD } = (currentState ?? { data: [] }) as { data: Data[] };

  const getCurrentData = () => {
    return setCurrentData(currentD.find((item) => "" + item.id === question));
  };

  useEffect(() => {
    getCurrentData();
  });

  const storeAnswerFunc = (id: number | any, txt: string): void => {
    setAnswerArray((prev: string[]) => [...prev, txt]);

    localStorage.setItem("answers", JSON.stringify(answerArray));

    setInputText("");
  };
  return (
    <QuestionContainer>
      <QuestionDiv>
        <h3>
          {currrentData?.id}. {currrentData?.question}
        </h3>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          <Input
            type="text"
            key={currrentData?.id}
            placeholder="Enter your answer"
            value={inputText}
            onChange={(e: any) => setInputText(e.target.value)}
          ></Input>
        </form>
        <ButtonsContainer>
          <div></div>
          {Number(question) > 5 ? (
            <Link
              href="/result"
              style={{
                textDecoration: "none",
                color: "#E4006C",
                border: " 2px solid #E4006C",
                textAlign: "center",
                padding: "0.5rem",
                borderRadius: "3px",
                fontWeight: "bold",
                margin: "1rem",
              }}
            >
              End
            </Link>
          ) : (
            <Link
              onClick={() => storeAnswerFunc(currrentData?.id, inputText)}
              style={{
                textDecoration: "none",
                color: "#E4006C",
                border: " 2px solid #E4006C",
                textAlign: "center",
                padding: "0.5rem",
                borderRadius: "3px",
                fontWeight: "bold",
                margin: "1rem",
              }}
              href="/questions/[question]"
              as={`/questions/${Number(currrentData?.id) + 1}`}
            >
              Next
            </Link>
          )}
        </ButtonsContainer>
      </QuestionDiv>
    </QuestionContainer>
  );
};
// export const getServerSideProps = async (context) => {
//   const res = await fetch(process.env.ORIGIN + `/questions.json`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

const fetchQuestions = async (): Promise<Data[]> => {
  const res = await fetch(process.env.ORIGIN + `/questions.json`);
  const data = await res.json();
  return data;
};
export const getStaticProps: GetStaticProps = async (context) => {
  const question = context.params?.question;
  const queryClient = new QueryClient();
  console.log("question number", question);
  await queryClient.prefetchQuery(["question", question], fetchQuestions);
  return {
    props: {
      dehydratedData: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchQuestions();
  const paths = data.map(({ id }) => ({ params: { question: "" + id } }));

  console.log("all paths", paths);
  return {
    paths,
    fallback: true,
  };
};

export default Question;

// process.env.ORIGIN + `/questions.json/${context.params.question}`
