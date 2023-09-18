import { useRive } from '@rive-app/react-canvas';

function App() {
  const { rive, RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    autoplay: false,
    
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
      style={{width: '300px', height: '200px'}}
    />
  );
}

export default App;
