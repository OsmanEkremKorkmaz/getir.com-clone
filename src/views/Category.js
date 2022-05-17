import Campaigns from 'components/Categories/Campaigns'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Category() {

    let { category } = useParams()
    return (
        <main className='mt-6'>
            <Campaigns />
            {category}
        </main>
    )
}
