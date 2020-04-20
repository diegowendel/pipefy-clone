import React, { useContext } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { MdAdd } from 'react-icons/md';
import { useDrop } from 'react-dnd';
import BoardContext from '../Board/context';

export default function List({ data, index: listIndex }) {
  const { move } = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop: (item, monitor) => {
      const hasDroppedOnChild = monitor.didDrop();
      if (hasDroppedOnChild) {
        return;
      }

      const draggedListIndex = item.listIndex;
      const draggedIndex = item.index;

      move(draggedListIndex, listIndex, draggedIndex, data.cards.length);
    },
  });

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>
      <ul ref={dropRef}>
        {data.cards.map((card, index) => (
          <Card key={card.id} data={card} index={index} listIndex={listIndex} />
        ))}
      </ul>
    </Container>
  );
}
