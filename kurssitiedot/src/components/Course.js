import React from 'react';

const Header = (props) => {
    return (
        <>
            <h2>{props.course}</h2>
        </>

    )
}

const Total = ({ parts }) => {
    const listExercises = parts.map(part => part.exercises)
    console.log(listExercises)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const total = () => listExercises.reduce(reducer)
    return (
        <h3>Kurssilla on yhteensä {total()} tehtävää.</h3>
    )
}

const Part = props => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )

}

const Content = (props) => {
    const listParts = () => props.parts.map(part =>
        <Part
            key={part.id}
            part={part}
        />
    )

    return (
        <div>
            {listParts()}
        </div>
    )
}

const Course = (props) => {
    return (
        <>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </>
    )
}

export default Course