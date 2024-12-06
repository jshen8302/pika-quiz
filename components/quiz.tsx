'use client'

import React, { useState } from 'react';
import  quiz  from '../data/data.js';
import Image from 'next';

interface Answer {
  text: string;
  pikaClone: string[];
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

interface QuizData{
  totalQuestions: number;
  questions: Question[];
}

type Counters = {
  [key: string]: number;
};

const page = () => {
  const [activeQuestion,setActiveQuestion] = useState(0)
  const [selectAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [selectAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false)
  const [counters, setCounters] = useState<Counters>({
    pikachu: 0,
    pichu: 0,
    twins: 0,
    pachirisu: 0,
    emolga: 0,
    dedenne: 0,
    togedemaru: 0,
    mimikyu: 0,
    morpeko: 0,
    pawmo: 0,
      
  })

  const {questions} = quiz as QuizData;
  const {question, answers} = questions[activeQuestion];

  const handleSelectAnswer = (answer: Answer,idx: number) => {
    setSelectedAnswer(idx);

    // update counters for the selected pikachu
    const updatedCounters = {...counters};
    answer.pikaClone.forEach((pika) => {
      if (updatedCounters[pika.toLowerCase()] !== undefined) {
        updatedCounters[pika.toLowerCase()]++;

      }
    
      
    });

    setCounters(updatedCounters);

  }


  return (
    <div className="min-h-screen flex flex-col flex-grow items-center justify-center">
      {!showResult ? (
        <div className="flex flex-col-reverse flex-grow justify-center w-min-3xl gap-4">
         <div className="bg-[#3840A3] text-white max-w-2xl text-4xl border-solid border-x-4 border-y-4 rounded-lg px-8 py-3">
          {questions[activeQuestion].question}
         </div>
         <div className="flex">
          <div className="flex-1"></div>
          <div className="bg-[#3840A3] flex flex-col text-white max-w-2xl text-4xl border-solid border-x-4 border-y-4 rounded-lg px-8 py-3">
            {answers.map((answer,idx) => (
            <li key={idx} className="flex">
              <span className="">{answer.text}</span>
            </li>


          ))}

          </div>
        

         </div>

        </div>

        
      ) : (
        <div></div>

    
    
    )}
      <div>

      </div>
   
    </div>

  );







}

export default page;