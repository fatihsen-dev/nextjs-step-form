"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dispatch, SetStateAction } from "react";

const schema = z.object({});

export const Confrim = ({
   values,
   setValues,
   step,
   setStep,
}: {
   step: number;
   setStep: Dispatch<SetStateAction<number>>;
   values: object;
   setValues: Dispatch<SetStateAction<object>>;
}) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(schema),
   });

   return (
      <form
         className={`flex-col gap-4 w-full ${step === 3 ? "flex" : "hidden"}`}
         onSubmit={handleSubmit((d) => console.log(values))}>
         <pre className='bg-white rounded p-2 text-black overflow-auto'>
            {JSON.stringify(values, null, 4)}
         </pre>
         <div className='w-full flex items-center gap-4'>
            <button
               onClick={() => setStep(2)}
               className='flex-1 !bg-gray-500'
               type='button'>
               Back
            </button>
            <button className='flex-1 bg-blue-600' type='submit'>
               Confrim
            </button>
         </div>
      </form>
   );
};
