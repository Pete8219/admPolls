import React from 'react'
import { Header, Image } from 'semantic-ui-react'


export const HeaderPage = () => {
    return (
        <Header as='h1'>
              <Image src = '/images/gerb.png'/>
              <Header.Content className="header-content">
                Администрация города Салехарда
                <Header.Subheader className="subName">Платформа  проведения опросов</Header.Subheader>
              </Header.Content>
            </Header>
    )
}