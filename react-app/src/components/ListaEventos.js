import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Segment, Divider, Button } from 'semantic-ui-react';
import Header from './Header';

import ListaItems from './ListaItems';
import TicketForm from './TicketForm';
import Event from './Event';

function ListaEventos(props) {
  const {
    loading,
    data,
    error
  } = useQuery(GET_EVENTS_QUERY);

  if (error)
    return <Redirect to="/" />

  return (
    <Segment raised loading={loading}>
      <Header titulo='Mis Eventos' icono='group' />
      { data && (
        data.ver_eventos.length > 0
        ? <ListaItems 
            items={data.ver_eventos}
            itemComponent={Event}
            modalHeader="Enviar Ticket"
            modalComponent={TicketForm}
            sendActiveItemAs='event'
          />
        : <Segment padded textAlign="center" className="no-items">
            <p>Aún no has creado ningún evento</p>
          </Segment>
      )}
      { !loading && 
        <Divider horizontal>
          <Button
            icon="plus"
            color="teal"
            content="Nuevo "
            as={Link}
            to="/eventos/nuevo"
            replace
          />
        </Divider>
      }
    </Segment>
  );
}

export const GET_EVENTS_QUERY = gql`
  {
    ver_eventos {
      id
      name
      description
      date
      location
    }
  }
`;

export default React.memo(ListaEventos);