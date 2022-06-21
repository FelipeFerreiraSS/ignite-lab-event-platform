import  { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id 
      title

      teacher {
        name
      }
    }
  }
`

interface Lessons {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lessons[] }>(GET_LESSONS_QUERY) 
  
  return (
    <ul>
      {data?.lessons.map(lesson => {
        return (
          <div key={lesson.id}>
            <li>{lesson.title}</li>
          </div>
        )
      })}
    </ul>
  )
}

export default App
