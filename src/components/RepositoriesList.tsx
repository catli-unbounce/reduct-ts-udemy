import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  //useSelector will let use select only the state properties we need
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  const repoList = data.map((item) => <li>{item}</li>);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && <ul>{repoList}</ul>}
    </div>
  );
};

export default RepositoriesList;
