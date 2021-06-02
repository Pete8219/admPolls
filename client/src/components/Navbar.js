import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export const Navbar = () => {
    return (
        <Menu secondary>
            <Link to="/">
            <Menu.Item
                name='Главная'
            />
            </Link>
            <Link to="/">
            <Menu.Item
                name='Активные опросы'
            />
            </Link>
            <Link to="/">
            <Menu.Item
                name='Завершенные опросы'
            />
            </Link>
            
        </Menu>
    )
}