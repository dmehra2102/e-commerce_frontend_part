import React from 'react'
import styled from 'styled-components'
import { categories } from '../Images_url/images'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
  return (
    <Container>
        {categories.map(items=> {
            return <CategoryItem items={items} key={items.id}/>
        })}
    </Container> 
  )
}

export default Categories