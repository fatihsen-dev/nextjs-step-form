"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dispatch, SetStateAction } from "react";

const schema = z.object({
   firstName: z.string().nonempty("Required").min(3, "min 3 character"),
   lastName: z.string().nonempty("Required").min(3, "min 3 character"),
   email: z.string().nonempty("Required").email(),
   password: z.string().nonempty("Required").min(6, "min 6 character"),
   confrimPassword: z.string().nonempty("Required").min(6, "min 6 character"),
});

export const Contact = ({
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
         className={`flex-col gap-4 w-full ${step === 0 ? "flex" : "hidden"}`}
         onSubmit={handleSubmit((d) => {
            setValues({ ...values, ...d });
            setStep(1);
         })}>
         <div className='flex items-center gap-5'>
            <div className='flex-1'>
               <input
                  className='w-full'
                  placeholder='First name'
                  {...register("firstName")}
               />
               <p
                  style={{ opacity: errors.firstName?.message ? 1 : 0 }}
                  className='text-sm text-red-500'>{`${errors.firstName?.message}`}</p>
            </div>
            <div className='flex-1'>
               <input
                  className='w-full'
                  placeholder='Last name'
                  {...register("lastName")}
               />
               <p
                  style={{ opacity: errors.lastName?.message ? 1 : 0 }}
                  className='text-sm text-red-500'>{`${errors.lastName?.message}`}</p>
            </div>
         </div>
         <div className='w-full'>
            <input
               className='w-full'
               placeholder='example@gmail.com'
               type='text'
               {...register("email")}
            />
            <p
               style={{ opacity: errors.email?.message ? 1 : 0 }}
               className='text-sm text-red-500'>{`${errors.email?.message}`}</p>
         </div>
         <div className='flex items-center gap-5'>
            <div className='flex-1'>
               <input
                  type='password'
                  className='w-full'
                  placeholder='Password'
                  {...register("password")}
               />
               <p
                  style={{ opacity: errors.password?.message ? 1 : 0 }}
                  className='text-sm text-red-500'>{`${errors.password?.message}`}</p>
            </div>
            <div className='flex-1'>
               <input
                  type='password'
                  className='w-full'
                  placeholder='Confirm password'
                  {...register("confrimPassword")}
               />
               <p
                  style={{ opacity: errors.confrimPassword?.message ? 1 : 0 }}
                  className='text-sm text-red-500'>{`${errors.confrimPassword?.message}`}</p>
            </div>
         </div>
         <button className='bg-blue-600' type='submit'>
            Next
         </button>
      </form>
   );
};
