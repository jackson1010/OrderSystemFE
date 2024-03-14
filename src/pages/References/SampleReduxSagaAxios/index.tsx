import { Button } from "@/components/ui/button";
import { addCarts, deleteCarts, getCarts } from "@/data/actions/cartsAction";
import { getPokemon } from "@/data/actions/pokemonAction";
import { useDispatch, useSelector } from "react-redux";

const SampleReduxSagaAxios = () => {
  const dispatch = useDispatch();
  const carts: string[] = useSelector((state: any) => state.cartsReducer);
  const pokemon = useSelector((state: any) => state.pokemonReducer);
  console.log(carts);
  console.log(pokemon);

  return (
    <div className="p-2">
      <h1 className="mb-4 text-lg font-bold">Sample Redux</h1>
      <Button className="mr-2" onClick={() => dispatch(getCarts())}>
        Sample Get
      </Button>
      <Button className="mr-2" onClick={() => dispatch(addCarts("apple"))}>
        Sample Add
      </Button>
      <Button className="mr-2" onClick={() => dispatch(deleteCarts())}>
        Sample Delete
      </Button>
      <br />
      {carts.map((cart, i) => (
        <li key={i}>{cart}</li>
      ))}
      <br />

      <hr />

      <h1 className="mt-4 mb-4 text-lg font-bold">Sample Redux + Saga + Axios</h1>
      <Button className="mr-2" onClick={() => dispatch(getPokemon())}>
        Sample Get
      </Button>
      <p>{pokemon?.name}</p>
      <p>{pokemon?.weight}</p>
    </div>
  );
};

export default SampleReduxSagaAxios;
