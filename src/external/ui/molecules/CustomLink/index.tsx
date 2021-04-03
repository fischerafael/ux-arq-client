import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const CustomLink = ({ children, href }) => {
    return (
        <Link href={href}>
            <CustomAnchor>{children}</CustomAnchor>
        </Link>
    )
}

export default CustomLink

const CustomAnchor = styled.a`
    text-decoration: none;
    cursor: pointer;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`
