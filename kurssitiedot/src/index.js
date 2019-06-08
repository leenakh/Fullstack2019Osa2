import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

const Courselist = ({ courses }) => {
    const displayCourse = () => courses.map(course =>
        <Course
            key={course.id}
            course={course}
        />
    )
    return (
        <div>
            {displayCourse()}
        </div>
    )
}

const App = () => {
    const courses = [
        {
            id: 1,
            name: 'Half Stack -sovelluskehitys',
            parts: [
                {
                    name: 'Reactin perusteet',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Tiedonvälitys propseilla',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'Loitsiminen ja magia',
                    exercises: 1,
                    id: 42
                },
                {
                    name: 'Komponenttien tila',
                    exercises: 14,
                    id: 3
                }
            ]
        },
        {
            id: 7,
            name: 'Kissanhoidon perusteet',
            parts: [
                {
                    name: 'Ruokinta',
                    exercises: 1,
                    id: 6
                },
                {
                    name: 'Hygienia',
                    exercises: 2,
                    id: 8
                }
            ]
        },
        {
            id: 2,
            name: 'Kissanhoidon perusteet',
            parts: [
                {
                    name: 'Ruokinta',
                    exercises: 1,
                    id: 9
                }
            ]
        }
    ]


    return (
        <div>
            <h1>Kesäopisto 2019</h1>
            <Courselist courses={courses} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
