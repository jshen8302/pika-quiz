'use client'

import React, { useState } from 'react';
import  quiz  from '../data/data.js';
import Image from 'next/image';

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

const Page = () => {
  const [activeQuestion,setActiveQuestion] = useState(0)
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
  const {answers} = questions[activeQuestion];

  // select and check answer and move to the next question

  const onAnswerSelected = (answer: Answer) => {

    const updatedCounters = {...counters};
    answer.pikaClone.forEach((pika) => {
      if (updatedCounters[pika.toLowerCase()] !== undefined) {
        updatedCounters[pika.toLowerCase()] += 1;
      }
    });
    setCounters(updatedCounters);

    if (activeQuestion !== questions.length-1) {
      setActiveQuestion((prev) => prev + 1);
    } 
    else {
      setShowResult(true);
    }


  }

  const getHighestPikaClone = (counters: Counters): string => {
    // get the maximum count
    const maxCount = Math.max(...Object.values(counters));

    const tiedPikaClones = Object.entries(counters)
    .filter(([, count]) => count === maxCount)
    .map(([pika]) => pika)

    // tie, return a random pikaclone
    const randomIndex = Math.floor(Math.random() * tiedPikaClones.length);
    return tiedPikaClones[randomIndex];
  }

  const resetQuiz = () => {
    setCounters({
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

    });
    setShowResult(false);
    setActiveQuestion(0);

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
            <li 
              key={idx} 
              onClick={() => onAnswerSelected(answer)}
              className='hover:bg-gray-200 hover:text-gray-800 cursor-pointer list-none'
            >
              <span className="">{answer.text}</span>
            </li>
          ))}
          

          </div>
        

         </div>

        </div>

        
      ) : (
        <div className="min-h-screen flex flex-col flex-grow items-center justify-center gap-10">
          <div className="bg-[#3840A3] text-white max-w-3xl text-4xl border-solid border-x-4 border-y-4 rounded-lg px-8 py-3">
            You must be...
          </div>
          {(() => {
            const highestPikaClone = getHighestPikaClone(counters); // Get the highest pika-clone

            const firstLetter = highestPikaClone.charAt(0)

            const firstLetterCap = firstLetter.toUpperCase()

            const remainingLetters = highestPikaClone.slice(1)

            const capitalizedPikaClone = firstLetterCap + remainingLetters
            return (
              <>
                <Image
                  src={`/${highestPikaClone}-icon.jpg`} // Dynamically construct the image path
                  width={500}
                  height={500}
                  className="w-64 h-64 object-cover aspect-square border-solid border-x-4 border-y-4 rounded-lg"
                  alt={`Your pika-clone result: ${highestPikaClone}`}
                />
                <div className="bg-[#3840A3] text-white max-w-3xl text-4xl border-solid border-x-4 border-y-4 rounded-lg px-8 py-3">
                  <span className="font-bold">{capitalizedPikaClone}!</span>
                </div>
              </>
            );
          })()}
          <button
            onClick={() => resetQuiz()}
            className="text-4xl hover:text-gray-400"
          >
            retry
          </button>
          
        
        </div>

    
    
    )}
      <div>

      </div>
   
    </div>

  );







}

export default Page;