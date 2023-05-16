import {BsFillCloudUploadFill} from 'react-icons/bs'

export const Post = () => {
  return (
    <button style={{justifyContent: 'center'}}
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      <BsFillCloudUploadFill />
      traer datos
    </button>
  );
};