"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { About } from "./About";
import { Confrim } from "./Confrim";

const formContext = createContext<{
   step: number;
   setStep: Dispatch<SetStateAction<number>>;
   values: object;
   setValues: Dispatch<SetStateAction<object>>;
}>({
   step: 1,
   setStep: () => {},
   values: {},
   setValues: () => {},
});

export const Form = () => {
   const [step, setStep] = useState<number>(0);
   const [values, setValues] = useState<object>({});

   return (
      <formContext.Provider value={{ step, setStep, values, setValues }}>
         <div className='max-w-md w-full flex flex-col items-center gap-12'>
            <ul className='flex items-center justify-center gap-8 font-medium w-full'>
               <li className={`${step === 0 ? "text-blue-500 font-bold" : ""}`}>
                  Contact
               </li>
               <li className={`${step === 1 ? "text-blue-500 font-bold" : ""}`}>
                  Education
               </li>
               <li className={`${step === 2 ? "text-blue-500 font-bold" : ""}`}>About</li>
               <li className={`${step === 3 ? "text-blue-500 font-bold" : ""}`}>
                  Confrim
               </li>
            </ul>
            <Contact
               step={step}
               setStep={setStep}
               values={values}
               setValues={setValues}
            />
            <Education
               step={step}
               setStep={setStep}
               values={values}
               setValues={setValues}
            />
            <About step={step} setStep={setStep} values={values} setValues={setValues} />
            <Confrim
               step={step}
               setStep={setStep}
               values={values}
               setValues={setValues}
            />
         </div>
      </formContext.Provider>
   );
};
