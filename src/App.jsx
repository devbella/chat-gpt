const App = () => {
  return (
    <div className="min-h-screen max-w-screen-md mx-auto flex">
      <div className="bg-blue-100 w-52">Side</div>
      <div className="grow flex flex-col">
        <div className="bg-yellow-100 grow">Main</div>
        <div className="bg-purple-100 h-24">Chat Bar</div>
      </div>
    </div>
  );
};

export default App;
