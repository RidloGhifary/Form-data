import React from 'react'
import App from './src/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddData from './src/components/AddData'
import UpdateData from './src/components/UpdateData'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/addData' element={<AddData />} />
                <Route path='/updateData/:id' element={<UpdateData />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute