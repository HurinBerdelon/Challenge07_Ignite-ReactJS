import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

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
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure()

  // TODO SELECTED IMAGE URL STATE
  const [currentImageURL, setCurrentImageURL] = useState('')

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(imageURL: string) {
    setCurrentImageURL(imageURL)
    onOpen()
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid
        columns={3}
        spacing={'40px'}
      >

        {cards?.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        imgUrl={currentImageURL}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
