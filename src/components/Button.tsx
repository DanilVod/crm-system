import tw from 'twin.macro';

interface IButton {
  onclick: () => void;
}
const Button = ({ onclick }: IButton) => {
  const IncrementButton = tw.div`bg-blue-700 hover:cursor-pointer`;

  return <IncrementButton onClick={onclick}>Increment</IncrementButton>;
};

export default Button;
