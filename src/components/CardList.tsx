import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import { Card } from './Card';
// import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  console.log(cards);
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      {/* <SimpleGrid columns={5} spacing={10}>
        {cards.map(card => (
        <Card data={card} />
        ))}
      </SimpleGrid> */}

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
