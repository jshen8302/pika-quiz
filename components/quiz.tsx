'use client'

import React, { useState } from 'react';
import  quiz  from '../data/data.js';
import Image from 'next/image';

interface Attribute {
  key: string;
  weight: number;
}
interface Answer {
  text: string;
  attributes: Attribute[];
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

const pikaclones = {
  Pikachu: ['A','B','D','F','J','K'],
  Pichu: ['A','F','G','I','N'],
  Twins: ['A','C','D','F','J'],
  Pachirisu: ['A','F','I','L','N'],
  Emolga: ['A','B','F','G','L','M'],
  Dedenne: ['C','E','G','H','L','N'],
  Togedemaru: ['C','E','G','J','K','L'],
  Mimikyu: ['C','E','F','J','L','M'],
  Morpeko: ['A','B','C','F','I','M'],
  Pawmot: ['B','D','F','H','J','N'],
};

const initializeCounters = () => {
  const keys = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  ];
  const counters: Counters = {};
  keys.forEach((key) => {
    counters[key] = 0;
  });
  return counters;
};

const Page = () => {
  const [activeQuestion,setActiveQuestion] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [counters, setCounters] = useState<Counters>({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0, 
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
      
  })


  const {questions} = quiz as QuizData;

  // select and check answer and move to the next question

  const onAnswerSelected = (answer: Answer) => {

    const updatedCounters = {...counters};

    answer.attributes.forEach((attribute) => {
        updatedCounters[attribute.key] += attribute.weight;
    });

    setCounters(updatedCounters);

    if (activeQuestion < questions.length-1) {
      setActiveQuestion((prev) => prev + 1);
    } 
    else {
      setShowResult(true);
    }


  };

  const calculatePikacloneScores = () => {
    const pikacloneScores: { [key: string]: number } = {};
    for (const [pikaclone, attributes] of Object.entries(pikaclones)) {
      pikacloneScores[pikaclone] = attributes.reduce(
        (sum, attr) => sum + (counters[attr] || 0),
        0
      );
    }
    return pikacloneScores;
  }

  const resetQuiz = () => {
    setCounters(initializeCounters());
    setShowResult(false);
    setActiveQuestion(0);

  }

  


  const pikacloneScores = calculatePikacloneScores();

  return (
    <div className="min-h-screen flex flex-col flex-grow items-center justify-center">
      {!showResult ? (
        <div className="flex flex-col-reverse flex-grow justify-center w-min-3xl gap-4">
         <div className="bg-[#3840A3] text-white max-w-sm md:max-w-2xl text-xl md:text-4xl border-solid border-x-4 border-y-4 rounded-lg px-8 py-3">
          {questions[activeQuestion].question}
         </div>
         <div className="flex">
          <div className="flex-1"></div>
          <div className="bg-[#3840A3] flex flex-col text-white max-w-sm md:max-w-2xl text-xl md:text-4xl border-solid border-x-4 border-y-4 rounded-lg px-8 py-3">
            {questions[activeQuestion]?.answers.map((answer,idx) => (
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
        <div className="p-24 flex flex-1 flex-col items-center justify-center gap-10">
          <div className="bg-[#3840A3] text-white max-w-sm md:max-w-3xl text-2xl md:text-4xl border-solid border-x-4 border-y-4 rounded-lg px-8 py-3">
            You must be...
          </div>
          {(() => {
            const highestPikaClone = Object.keys(pikacloneScores).reduce((a,b) => 
              pikacloneScores[a] > pikacloneScores[b] ? a : b 
          );
            return (
              <>
                <Image
                  src={`/${highestPikaClone.toLowerCase()}-icon.jpg`} // Dynamically construct the image path
                  width={500}
                  height={500}
                  className="w-64 h-64 object-cover aspect-square border-solid border-x-4 border-y-4 rounded-lg"
                  alt={`Your pika-clone result: ${highestPikaClone}`}
                />
                <div className="bg-[#3840A3] text-white max-w-3xl text-4xl border-solid border-x-4 border-y-4 rounded-lg px-8 py-3">
                  <span>{highestPikaClone}!</span>
                </div>
              </>
            );
          })()}
          <div className="bg-gray-200 p-4 text-black">
            <h2 className="text-xl font-bold">Counters:</h2>
            <ul>
              {Object.entries(counters).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-bold mt-4">PikaClone Scores:</h2>
            <ul>
              {Object.entries(pikacloneScores).map(([pikaclone, score]) => (
                <li key={pikaclone}>
                  {pikaclone}: {score}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => resetQuiz()}
            className="text-3xl md:text-4xl hover:text-gray-400"
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