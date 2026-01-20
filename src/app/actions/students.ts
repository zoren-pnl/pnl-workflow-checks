'use server'

import { supabase } from "@/src/lib/supabase"

export async function createStudent(formData: FormData) {
  const name = formData.get('name') as string
  const age = Number(formData.get('age'))
  const course = formData.get('course') as string

  await supabase.from('students').insert({ name, age, course })
}

export async function deleteStudent(id: string) {
  await supabase.from('students').delete().eq('id', id)
}
