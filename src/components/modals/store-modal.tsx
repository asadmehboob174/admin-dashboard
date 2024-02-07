'use client'

import React from 'react'
import Modal from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


const formSchema = z.object({
  name: z.string().min(1),
})

const StoreModal = () => {
  const { isOpen, onClose} = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver : zodResolver(formSchema),
    defaultValues : {
      name : ''
    }
  });

  const onSubmit = async (values : z.infer<typeof formSchema>) => {
    console.log(values);
     //Todo: Create store
  }
  
  return (
    <Modal
      title="Create store"
      discription="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className='space-y-4 py-2 pb-4'>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField 
                      control={form.control}
                      name="name"
                      render={({field}) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder='E-commerce' {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                      )}
                      />
                  <div className='pt-6 space-x-2 flex items-center justify-end'>
                    <Button onClick={onClose} variant='outline'>Cancel</Button>
                    <Button type='submit' variant="default">Continue</Button>

                  </div>
               </form>
            </Form>
        </div>
      </div>
    </Modal>
  )
}

export default StoreModal