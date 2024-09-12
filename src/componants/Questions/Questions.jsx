import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Questions.css'
import QuestionSelect from '../QuestionSelect/QuestionSelect'
import Container from 'react-bootstrap/esm/Container'

const Questions = () => {
    const qdata = [{
        title: "non consectetur erat nam tectus duis?"
    },
    {
        title: "feugait scelerisque varius morbi enim ?"
    },
    {
        title: "dolor sit amet consectetur adipiscing elit pellentesque?"
    },
    {
        title: "ac odio tempor arci depibus ."
    },
    {
        title: "tempus quam pellentesque nec nam aliquam sem et tortor?"
    },
    {
        title: "perspiciatis quod quos nulla quo illum ullam?"
    },
    ]
    return (
        <Container fluid className='Questions mt-5 pt-5  pb-5'>
            <SectionTitle title="Frequently asked questions" paragaph=" Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
            {
                qdata.map((element, index) => {
                    return (
                        <QuestionSelect key={index} title={element.title} />
                    )
                })
            }
        </Container>
    )
}

export default Questions