"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dispatch, SetStateAction } from "react";

const schema = z.object({
   about: z.string().nonempty("Required").min(10, "min 10 character"),
});

export const About = ({
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
      formState: { errors, isValid },
   } = useForm({
      resolver: zodResolver(schema),
   });

   return (
      <form
         className={`flex-col gap-4 w-full ${step === 2 ? "flex" : "hidden"}`}
         onSubmit={handleSubmit((d) => {
            setValues({ ...values, ...d });
            setStep(3);
         })}>
         <div className='w-full'>
            <textarea
               className='w-full border p-2 rounded text-black max-h-60'
               placeholder='about'
               {...register("about")}
            />
            <p
               style={{ opacity: errors.email?.message ? 1 : 0 }}
               className='text-sm text-red-500'>{`${errors.email?.message}`}</p>
         </div>
         <div className='w-full flex items-center gap-4'>
            <button
               onClick={() => setStep(1)}
               className='flex-1 !bg-gray-500'
               type='button'>
               Back
            </button>
            <button className='flex-1 bg-blue-600' disabled={!isValid} type='submit'>
               Next
            </button>
         </div>
      </form>
   );
};
