import { supabase } from '../src/lib/supabase'
import { createStudent, deleteStudent } from '../src/app/actions/students'

export default async function Home() {
  const { data: students } = await supabase
    .from('students')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <main style={{ padding: 20 }}>
      <h1>Student CRUD</h1>

      <form action={createStudent}>
        <input name="name" placeholder="Name" required />
        <input name="age" type="number" placeholder="Age" />
        <input name="course" placeholder="Course" />
        <button type="submit">Add Student</button>
      </form>

      <ul>
        {students?.map(student => (
          <li key={student.id}>
            {student.name} ({student.age}) - {student.course}
            <form action={deleteStudent.bind(null, student.id)}>
              <button type="submit">Delete button</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  )
}
