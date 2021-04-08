import { useEffect, useState } from 'react'

import useAuth from '../../../hooks/useAuth'
import useUnauthorize from '../../../hooks/useUnauthorize'

import { FlexContainer } from '../../molecules/Flex'
import { GridContainer } from '../../molecules/Grid'
import { Text } from '../../molecules/Text'
import PublicReferenceCard from '../../templates/Cards/PublicReferenceCard'

import NavBar from '../../templates/NavBar'

const Dashboard = () => {
    useUnauthorize()
    const { credentials } = useAuth()

    const [publicProjects, setPublicProjects] = useState([])
    console.log(publicProjects)

    useEffect(() => {
        const PUBLIC_PROJECTS_URL =
            'https://strapi-api-ux.herokuapp.com/projects?type=public_reference'
        async function fetchAPI(url) {
            const response = await fetch(url)
            const data = await response.json()
            setPublicProjects(data)
        }
        fetchAPI(PUBLIC_PROJECTS_URL)
    }, [])

    return (
        <>
            <NavBar />
            <FlexContainer
                as="main"
                style={{
                    minHeight: '85vh',
                    justifyContent: 'flex-start',
                    flexDirection: 'column'
                }}
            >
                <FlexContainer
                    as="section"
                    style={{
                        maxWidth: '1024px',
                        padding: '1rem',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                >
                    <Text
                        as="h1"
                        style={{ fontSize: '1rem', fontWeight: 'bold' }}
                    >
                        Referências de Projeto
                    </Text>
                </FlexContainer>
                <FlexContainer as="section">
                    <GridContainer>
                        {publicProjects.length &&
                            publicProjects.map((reference) => (
                                <PublicReferenceCard
                                    key={reference.id}
                                    name={reference.name}
                                    img={reference.thumbnail}
                                />
                            ))}
                    </GridContainer>
                </FlexContainer>
            </FlexContainer>
        </>
    )
}

export default Dashboard
