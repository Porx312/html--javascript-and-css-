export default function Button() {
  function handleClick() {
    alert('¡Me cliqueaste!');
  }

  return (
    <button onClick={handleClick}>
      Cliquéame
    </button>
  );
}
