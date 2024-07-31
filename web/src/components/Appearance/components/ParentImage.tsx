import styled from 'styled-components';

interface ParentImageProps {
  firstOption: number;
  secondOption: number;
}

const Container = styled.div`
  min-width: 0;

  display: flex;
  flex-grow: 1;

  > img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

const ParentImage: React.FC<ParentImageProps> = ({ firstOption, secondOption }) => {
  return (
    <Container>
      <img src={`assets/images/${firstOption}.webp`} alt="appearance:firstOption" />
      <img src={`assets/images/${secondOption}.webp`} alt="appearance:secondOption" />
    </Container>
  );
};

export default ParentImage;
