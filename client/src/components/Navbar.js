import React from 'react'
import { Menu } from 'semantic-ui-react'

export const Navbar = () => {
    return (
        <Menu secondary>
            <Menu.Item
                name='Главная'
            />
            <Menu.Item
                name='Активные опросы'
            />
            <Menu.Item
                name='Завершенные опросы'
            />
            
        </Menu>
    )
}